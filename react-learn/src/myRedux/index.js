import { createStore } from "./myCreateStore";
import reducer from "./reducer";
import * as loginUserAction from "./action/loginUserAction";
import * as usersAction from "./action/usersAction";
import uuid from 'uuid';

const store = createStore(reducer);

const unListen = store.subscribe(() => {
    console.log(store.getState(),'unListen');
})

store.dispatch(usersAction.createAddUserAction({id: uuid(), name: "韭菜", age: 22 }))
store.dispatch(loginUserAction.createSetLoginUserAction({id: uuid(), name: "韭菜", age: 22 }))
console.log(store.getState());
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