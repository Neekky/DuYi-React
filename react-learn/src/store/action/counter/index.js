import { createActions, handleActions, combineActions } from 'redux-actions';

const actions = createActions({
    INCREASE: () => 1,
    DECREASE: () => -1,
    ASYNC_INCREASE: null,
    ASYNC_DECREASE: null,
    AUTO_INCREASE: null,
    STOP_AUTO_INCREASE: null,
    ADD: n => n,
});

console.log(actions);

export const { increase, decrease, asyncIncrease, asyncDecrease, autoIncrease, stopAutoIncrease, add } = actions;

const fn = combineActions(increase, decrease, add);

export default handleActions({
    [fn]: (state, action) => state + action.payload,
}, 10)