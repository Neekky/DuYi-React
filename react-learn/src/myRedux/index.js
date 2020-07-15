import { createStore } from "./myCreateStore";
import reducer from "./reducer";
import * as loginUserAction from "./action/loginUserAction";
import * as usersAction from "./action/usersAction";
import uuid from 'uuid';

const store = createStore(reducer);

const unListen1 = store.subscribe(() => {
    console.log(store.getState(),'订阅者1');
})

const unListen2 = store.subscribe(() => {
    console.log(store.getState(),'订阅者2');
})

store.dispatch(usersAction.createAddUserAction({id: uuid(), name: "韭菜", age: 22 }))
unListen1()
store.dispatch(loginUserAction.createSetLoginUserAction({id: uuid(), name: "韭菜", age: 22 }))
console.log(store.getState());