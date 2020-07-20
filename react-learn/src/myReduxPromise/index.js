import { isPlainObject, isString } from 'lodash';
import isPromise from 'is-promise';

export default ({ dispatch }) => next => action => {
    if (!isFSA(action)) {
        //如果不是一个标准的action
        //如果action是一个promise，则将其resolve的值dispatch，否则，不做任何处理，交给下一个中间件
        return isPromise(action) ? action.then(dispatch) : next(action);
    }
    return (
        isPromise(action.payload) ?
            action.payload.then(
                // 展开action，混入payload，生成新的action
                payload => dispatch({ ...action, payload })
            ).catch(
                // 处理错误
                error => dispatch({ ...action, payload: error, error: true })
            )
            :
            // 不是promise，直接将action移交给下个中间件
            next(action)
    )
}

/**
 * 判断action是不是一个标准的flux action
 * @param {*} action 
 */
function isFSA(action) {
    // action必须是一个平面对象
    // action.type必须是一个字符串
    // action的属性不能包含其他非标准属性，标准属性（type、payload、error、meta）
    return (
        isPlainObject(action) &&
        isString(action.type) &&
        Object.keys(action).every(key => ["type", "payload", "error", "meta"].includes(key)));
}