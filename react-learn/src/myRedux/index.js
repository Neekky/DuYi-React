import { createStore } from "./myCreateStore";
import { bindActionCreators } from "./myBindActionCreators";
import { applyMiddleware } from "./myApplyMiddleware";
// import { createStore, bindActionCreators, applyMiddleware } from "redux";
import reducer from "./reducer";
import * as loginUserAction from "./action/loginUserAction";
import * as usersAction from "./action/usersAction";
import uuid from 'uuid';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'; 

const logger3 = createLogger({ collapsed: false, duration: true })

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
const store = createStore(reducer, applyMiddleware(logger3 ));

// 方式二
// const store = applyMiddleware(logger1, logger2)(createStore)(reducer)

const boundUserAction = bindActionCreators({ ...usersAction, ...loginUserAction }, store.dispatch);

// const unListen1 = store.subscribe(() => {
//     // 拿到更新前后数据、和action类型
//     console.log(store.getState(), '订阅者1');
// })

// boundUserAction.createAddUserAction([{ id: uuid(), name: "韭菜", age: 22 }]) 
// unListen1();
// boundUserAction.createSetLoginUserAction({ id: uuid(), name: "韭菜", age: 22 });
// boundUserAction.createSetLoginUserAction({ id: uuid(), name: "大庄", age: 25 });

export default store;