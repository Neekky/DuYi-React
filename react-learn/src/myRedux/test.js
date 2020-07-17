import { createSetUsersAction, createSetLoadingAction } from './action/usersAction';
import uuid from 'uuid';
import store from './index';
import { getAllStudents } from '../services/student'

store.dispatch(createSetLoadingAction(true)); // 正在加载
getAllStudents().then(resp => {
    const action = createSetUsersAction(resp);
    store.dispatch(action); 
    store.dispatch(createSetLoadingAction(false)); // 加载完成
})


