import { createStore } from "redux";

/**
 * reducer本质上就是一个普通函数
 * @param {*} state 之前仓库中的状态（数据）
 * @param {*} action 描述要作什么的对象
 */
function reducer(state, action) {
    //返回一个新的状态
    if (action.type === "increase") {
        state += 1
        return state;
    }
    else if (action.type === "decrease") {
        state -= 1
        return state;
    }
    return state;
}
window.store = createStore(reducer, { id: 22 });

const action = {
    type: "increase"
}

console.log(window.store);
console.log(window.store.getState()); //得到仓库中当前的数据

window.store.dispatch(action); //向仓库分发action

console.log(window.store.getState()); //得到仓库中当前的数据

function myCreateStore(reducer, store) {
    let myStore = store;
    return {
        dispatch: function (action) {
            myStore = reducer(myStore, action);
        },
        getState: function () {
            console.log( );
        }
    }
}