import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import * as sagaEffects from './saga';
import { createHashHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

/**
 * 创建dva对象的函数
 * opts 配置项
 */
export default function (opts = {}) {
    let app = {
        model,
        _models: [], // 记录已经定义的模型
        router,
        _router: null, // 用于记录路由函数
        start
    };

    // 得到所有的配置
    const options = getOptions();

    /**
     * 得到配置
     */
    function getOptions(params) {
        const options = {
            history: opts.history || createHashHistory(),
            initialState: opts.initialState === undefined ? {} : opts.initialState,
            onError: opts.onError || (() => { }),
            onStateChange: opts.onStateChange || (() => { }),
            onReducer: opts.onReducer || ((reducer) => (state, action) => reducer(state, action)),
            extraReducers: opts.extraReducers || {},
            extraEnhancers: opts.extraEnhancers || []
        }

        if (opts.onAction) {
            if (Array.isArray(opts.onAction)) {
                options.onAction = opts.onAction;
            } else {
                options.onAction = [opts.onAction];
            }
        } else {
            options.onAction = [];
        }

        return options;
    }

    /**
     * 根据模型对象定义一个模型
     * @param {object} modelObj 
     */
    function model(modelObj) {
        app._models.push(modelObj);
    }

    /**
     * 传入一个路由函数，该函数返回路由配置
     * @param {function} routerFunc 
     */
    function router(routerFunc) {
        app._router = routerFunc;
    }

    /**
     * 
     * @param {*} selector 
     * 创建仓库
     * 仓库中的redux中间件加入
     * 创建react根结点
     * react-redux Provider组件在这里加入
     * react-dom 加入
     * model 对象加入
     * subscriptions 加入
     */
    function start(selector) {
        const store = getStore();
        // 运行注册的subscriptions
        runSubscriptions(store.dispatch);
        render(selector, store);
    };

    /**
     * 运行注册函数
     */
    function runSubscriptions(dispatch) {
        for (const model of app._models) {
            const newDispatch = function (action) {
                dispatch(getNewAction(action, model));
            }
            if (model.subscriptions) {
                for (const prop in model.subscriptions) {
                    let func = model.subscriptions[prop];
                    func({
                        dispatch: newDispatch,
                        history: options.history
                    });
                }
            }
        }
    }

    /**
     * 返回中间件
     * @param {*} params 
     */
    function getMiddlewares(middleware) {
        const sagaMid = createSagaMiddleware();

        getMiddlewares.runSaga = function (store) {
            const generatorFuncs = []; // 保存副作用函数的数组
            for (const model of app._models) {
                // 改造put函数
                const put = function (action) {
                    return sagaEffects.put(getNewAction(action, model));
                };

                // 对副作用做处理
                if (model.effects) {
                    for (const prop in model.effects) {
                        generatorFuncs.push({
                            type: `${model.namespace}/${prop}`,
                            generatorFunc: model.effects[prop],
                            put,
                            model
                        });
                    };
                };
            };
            sagaMid.run(function* () {
                for (const item of generatorFuncs) {
                    let func = function* (action) {
                        try {
                            yield item.generatorFunc(action, { ...sagaEffects, put: item.put })
                        }
                        catch (err) {
                            options.onError(err, store.dispatch);
                        }
                    }
                    // 对副作用func函数进一步封装
                    if (opts.onEffect) {
                        let oldEffect = func;
                        func = opts.onEffect(oldEffect, sagaEffects, item.model, item.type)
                    }
                    yield sagaEffects.takeEvery(item.type, func);
                };
            });
        };

        return composeWithDevTools(applyMiddleware(routerMiddleware(options.history), sagaMid, ...options.onAction));
    };

    /**
     * 将action的类型绑定到模型
     * @param {*} action 
     * @param {*} model 
     */
    function getNewAction(action, model) {
        let newAction = action;
        if (!newAction.type.includes('/')) {
            newAction = {
                ...action,
                type: `${model.namespace}/${action.type}`
            };
        }
        return newAction;
    };

    /**
     * 得到额外的 reducer，合并到根 reducer 中去
     * @param {*} params 
     */
    function getExtraReducers(params) {
        return {
            router: connectRouter(options.history),
            // eslint-disable-next-line no-useless-computed-key
            ['@@dva'](state = 0, action) {
                return state;
            },
            ...options.extraReducers
        };
    };

    /**
     * 得到一个redux仓库对象
     */
    function getStore() {
        let rootReducerObj = {};

        for (const model of app._models) {
            // 将模型转换为reducer
            const obj = getReducer(model);
            rootReducerObj[obj.name] = obj.reducer;
        };

        rootReducerObj = { ...rootReducerObj, ...getExtraReducers() };
        let rootReducer = combineReducers(rootReducerObj);
        let oldReducer = rootReducer;
        // 重新封装reducer，具备onStateChange功能
        rootReducer = function (state, aciton) {
            const newState = oldReducer(state, aciton);
            options.onStateChange(newState);
            return newState;
        }

        // 进一步封装reducer
        rootReducer = options.onReducer(rootReducer);

        const newCreateStore = options.extraEnhancers.reduce((fn1, fn2) => {
            return fn2(fn1)
        }, createStore);

        // 根据模型，得到一个根的reducer
        const store = newCreateStore(rootReducer, options.initialState, getMiddlewares());

        // 运行saga
        getMiddlewares.runSaga(store);

        window.store = store;
        return store;
    }

    /**
     * 根据一个模型得到一个reducer
     * @param {*} model 
     */
    function getReducer(model) {
        if (!model.namespace) {
            throw new Error('为什么不写上 reducer 的名字？')
        };
        if (model.state === null || model.state === undefined) {
            throw new Error('为什么不把默认 state 写好？')
        };

        const actionTypes = []; // 要匹配的action类型
        if (model.reducers) {
            for (const prop in model.reducers) {
                actionTypes.push({
                    type: `${model.namespace}/${prop}`, // 要匹配的 action 类型
                    reducer: model.reducers[prop] // 要运行的 reducer 函数
                });
            };
        };

        const reducerObj = {
            name: model.namespace,
            reducer(state = model.state, action) {
                const tempReducer = actionTypes.find(reducerItem => reducerItem.type === action.type);
                if (tempReducer) {
                    // 运行对应的函数
                    return tempReducer.reducer(state, action);
                } else {
                    return state;
                };
            }
        };
        return reducerObj;
    }

    /**
     * 负责渲染
     * @param {*} selector 
     */
    function render(selector, store) {
        const routerConfig = app._router({ history: options.history, app });
        const root = <Provider store={store}>
            {routerConfig}
        </Provider>
        ReactDom.render(root, document.querySelector(selector));
    }

    return app;
}