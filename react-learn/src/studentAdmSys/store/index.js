// 用于创建仓库，并导出
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from '../../myReduxPromise';
// import promise from 'redux-promise';

const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;