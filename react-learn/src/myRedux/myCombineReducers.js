import isPlainObject from "./utils/isPlainObject";
import ActionTypes from "./utils/ActionTypes";

function validateReducers(reducers) {
    if (typeof reducers !== "object") {
        throw new TypeError("reducers must be an object");
    }
    if (!isPlainObject(reducers)) {
        throw new TypeError("reducers must be a plain object");
    }
}

export function combineReducers(reducers) {
    validateReducers(reducers);
    /**
     * 返回的是一个reducer函数
     */
    return function (state = {}, action) {
        const newState = {}; //要返回的新的状态
        for (const key in reducers) {
            if (reducers.hasOwnProperty(key)) {
                const reducer = reducers[key];
                newState[key] = reducer( [key], action);
            }
        }
        return newState; //返回状态
    }
}