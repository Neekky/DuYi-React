import { fetchUsers } from './action/usersAction';
import store from './index';

store.dispatch(fetchUsers()); // 正在加载



