import { fetchUsers } from './action/usersAction';
import store from './index';

console.log(store.dispatch(fetchUsers()).then(()=>console.log('加载完成'))) ; // 正在加载



