import dva from "dva";
import counterModel from "./models/counter";
import agreeModel from "./models/agree";
import routerConfig from "./routerConfig";
import { createBrowserHistory } from "history";

const logger = store => next => action => {
    console.log('老状态', store.getState(), action);
    next(action);
    console.log('新状态', store.getState(), action);
    console.log('')
}

// 得到一个dva对象
const app = dva({
    history: createBrowserHistory(),
    initialState: { counter: 111 },
    onError(err, dispatch) {
        console.log(err.message, dispatch)
    },
    onAction: logger,
    onStateChange(state) {
        console.log(state, '打印state')
    },
    onReducer(reducer) {
        return function (state, action) {
            return reducer(state, action)
        }
    },
    onEffect(oldEffect, sagaEffects, model, actiontype) {
        return function* (action) {
            console.log('即将执行副作用代码');
            yield oldEffect(action);
            console.log('副作用代码执行完毕');
        }
    },
    extraReducers:{
        abc(state = 123, action) {
            if (action.type === 'counter/increase') return state + 1;
            return state;
        }
    },
    extraEnhancers: [function (createStore) {
        return function(...args) {
            console.log('仓库即将创建');
            return createStore(...args);
        }
    }]
});

// 设置根路由
// app.router(App);
app.router(routerConfig);

// 在启动之前定义模型
app.model(counterModel);
app.model(agreeModel);

app.start("#root");