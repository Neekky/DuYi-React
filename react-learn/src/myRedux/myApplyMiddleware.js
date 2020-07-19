import {compose} from "./compose";
/**
 * 注册中间件
 * @param  {...any} middlewares 
 */
export function applyMiddleware(...middlewares) {
    // 接收creatStore方法
    return function (createStore) {
        // 接收reducer和默认状态 ，用于创建仓库
        return function (reducer, defaultState) {
            //创建仓库
            const store = createStore(reducer, defaultState);
            let dispatch = () => { throw new Error("目前还不能使用dispatch") };

            const simpleStore = {
                getState: store.getState,
                // 这里不能写成dispatch: dispatch，否则一直是上面那个报错的dispatch
                // 也不能写成store.dispatch，否则一直是最原始的dispatch
                // 写成函数形式是为了保证引用地址一致
                dispatch: (...args) => dispatch(...args)
            }
            
            //给dispatch赋值
            //根据中间件数组，得到一个dispatch创建函数的数组
            const dispatchProducers = middlewares.map(mid => mid(simpleStore));
            // 在完成dispatch前，是调用不了simpleStore中的dispatch的，只有等包装完
            dispatch = compose(...dispatchProducers)(store.dispatch)
            return {
                ...store,
                dispatch,
            }
        }
    }
}