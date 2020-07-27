import { createAction } from 'redux-actions';

export const actionTypes = {
    increase: Symbol("increase"),
    decrease: Symbol("decrease"),
    asyncIncrease: Symbol("async-increase"), //异步增加
    asyncDecrease: Symbol("async-decrease"),
    autoIncrease: Symbol("auto-increase"), //自动增加
    stopAutoIncrease: Symbol("stop-auto-increase"), //停止自动增加
    add: Symbol("add"),
}

export const increase = createAction(actionTypes.increase);
export const decrease = createAction(actionTypes.decrease);
export const asyncIncrease = createAction(actionTypes.asyncIncrease);
export const asyncDecrease = createAction(actionTypes.asyncDecrease);
export const autoIncrease = createAction(actionTypes.autoIncrease);
export const stopAutoIncrease = createAction(actionTypes.stopAutoIncrease);
export const add = createAction(actionTypes.add, n => n);