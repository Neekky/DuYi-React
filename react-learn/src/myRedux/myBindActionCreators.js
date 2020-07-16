export function bindActionCreators(actionCreators, dispatch) {
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

function getAutoDispatchActionCreator(actionCreator, dispatch) {
    return function (...args) {
        const action = actionCreator(...args)
        dispatch(action);
    }
}