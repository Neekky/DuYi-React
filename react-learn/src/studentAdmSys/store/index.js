// 用于创建仓库，并导出
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;