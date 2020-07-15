import { createStore } from "./myCreateStore";
import { bindActionCreators } from "./myBindActionCreators";
import reducer from "./reducer";
import * as loginUserAction from "./action/loginUserAction";
import * as usersAction from "./action/usersAction";
import uuid from 'uuid';

const store = createStore(reducer);

const boundUserAction = bindActionCreators({...usersAction,...loginUserAction}, store.dispatch);

const unListen1 = store.subscribe(() => {
    console.log(store.getState(), '订阅者1');
})

boundUserAction.createAddUserAction({ id: uuid(), name: "韭菜", age: 22 })
unListen1();
boundUserAction.createSetLoginUserAction({ id: uuid(), name: "韭菜", age: 22 });
boundUserAction.createSetLoginUserAction({ id: uuid(), name: "大庄", age: 25 });

console.log(store.getState());