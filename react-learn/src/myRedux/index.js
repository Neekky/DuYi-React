import { createStore, bindActionCreators } from "redux";
import * as actionTypes from "./action/actionType"
import * as numberActions from "./action/numberAction"

/**
 * reducer本质上就是一个普通函数
 * @param {*} state 之前仓库中的状态（数据）
 * @param {*} action 描述要作什么的对象
 */
function reducer(state, action) {
    //返回一个新的状态
    if (action.type === actionTypes.INCREASE) {
        state.id += 1
        return state;
    }
    else if (action.type === actionTypes.DECREASE) {
        state.id -= 1
        return state;
    }
    else if (action.type === actionTypes.SET) {
        state.id = action.payload; 
        return state;
    }
    return state;
}
const store = createStore(reducer, { id: 22 });

console.log(store.getState()); //得到仓库中当前的数据

// store.dispatch(numberActions.getSetAction(99)); //向仓库分发action
const boundActions = bindActionCreators(numberActions, store.dispatch)

boundActions.getIncreaseAction();
console.log(store.getState()); //得到仓库中当前的数据
boundActions.getSetAction(35);
console.log(store.getState()); //得到仓库中当前的数据
// function myCreateStore(reducer, store) {
//     let myStore = store;
//     return {
//         dispatch: function (action) {
//             myStore = reducer(myStore, action);
//         },
//         getState: function () {
//             console.log( );
//         }
//     }
// }