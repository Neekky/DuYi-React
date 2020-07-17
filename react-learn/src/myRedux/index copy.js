import { createStore } from "./myCreateStore";
import { bindActionCreators } from "./myBindActionCreators";
import { applyMiddleware } from "./myApplyMiddleware";
// import { createStore, bindActionCreators, applyMiddleware } from "redux";
import reducer from "./reducer";
import * as loginUserAction from "./action/loginUserAction";
import * as usersAction from "./action/usersAction";
import uuid from 'uuid';

// const logger1 = store => next => action => {
//     console.log("中间件1")
//     console.log("旧数据", store.getState());
//     console.log("action", action);
//     next(action);
//     console.log("新数据", store.getState());
// }

// const logger2 = store => next => action => {
//     console.log("中间件2")
//     console.log("旧数据", store.getState());
//     console.log("action", action);
//     next(action);
//     console.log("新数据", store.getState());
// }

function logger1(store) {
    return function (next) {
        return function (action) {
            console.log('logger1');
            next(action);
        }
    }
}

function logger2(store) {
    return function (next) {
        return function (action) {
            console.log('logger2');
            next(action);
        }
    }
}

// 方式一
const store = createStore(reducer, applyMiddleware(logger1, logger2));

// 方式二
// const store = applyMiddleware(logger1, logger2)(createStore)(reducer)

const boundUserAction = bindActionCreators({ ...usersAction, ...loginUserAction }, store.dispatch);

const unListen1 = store.subscribe(() => {
    // 拿到更新前后数据、和action类型
    console.log(store.getState(), '订阅者1');
})

boundUserAction.createAddUserAction({ id: uuid(), name: "韭菜", age: 22 })
unListen1();
boundUserAction.createSetLoginUserAction({ id: uuid(), name: "韭菜", age: 22 });
boundUserAction.createSetLoginUserAction({ id: uuid(), name: "大庄", age: 25 });

console.log(store.getState());