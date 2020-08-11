import { dva } from "./myDva";
import counterModel from "./models/counter";
import agreeModel from "./models/agree";
import routerConfig from "./routerConfig";
import { createBrowserHistory } from 'history';
import loading from './myDva/dvaLoading';

const logger = store => next => action => {
    console.log('老状态', store.getState());
    next(action);
    console.log('新状态', store.getState());
}

// 得到一个dva对象
const app = dva({
    history: createBrowserHistory(),
    initialState: {
        counter: 123
    },
    onError(err, dispatch) {
        console.log(err.message);
        console.log(dispatch)
    },
    // onAction: logger,
    onStateChange(state) {
        console.log(state.counter)
    },
    onReducer(reducer) {
        return function (state, action) {
            console.log('要执行了')
            return reducer(state, action)
        }
    },
    onEffect(effect, sagaEffects, model, actionType) {
        return function* (action) {
            console.log('即将执行副作用代码');
            yield effect(action);
            console.log('副作用代码执行完毕');
        }
    },
    extraReducers: {
        abc(state = 12, action) {
            if (action.type === 'counter/increase') return state + 1;
            return state;
        }
    },
    extraEnhancers: [function (createStore) {
        return function (...args) {
            console.log('仓库即将创建');
            return createStore(...args);
        }
    }]
});



// 设置根路由
// app.router(App);
app.router(routerConfig);

app.use(loading({
    namespace: 'iamading'
}))

// 在启动之前定义模型
app.model(counterModel);
app.model(agreeModel);

app.start("#root");