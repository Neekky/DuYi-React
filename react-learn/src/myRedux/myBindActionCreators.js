/**
 * 
 * @param {*} actionCreators action生成器
 * @param {*} dispatch 
 */
export function bindActionCreators(actionCreators, dispatch) {
    // 如果是函数则直接返回
    if (typeof actionCreators === 'function') {
        return getAutoDispatchActionCreator(actionCreators, dispatch)
    } else if (typeof actionCreators === "object") {
        const result = {}; //返回结果
        for (const key in actionCreators) {
            if (actionCreators.hasOwnProperty(key)) {
                const actionCreator = actionCreators[key];
                if (typeof actionCreator === 'function') {
                    result[key] = getAutoDispatchActionCreator(actionCreator, dispatch);
                } 
            }
        };
        return result;
    } else {
        throw new TypeError("actionCreators must be an object or function which means action creator")
    }
}

// 进行抽象，本质是使用action生成器，生成一个action，并调用dispatch触发
function getAutoDispatchActionCreator(actionCreator, dispatch) {
    return function (...args) {
        const action = actionCreator(...args)
        dispatch(action);
    }
}