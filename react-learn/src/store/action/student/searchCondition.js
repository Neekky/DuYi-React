import { createActions, handleActions } from 'redux-actions';

export const actions = createActions({
    CHANGE: newCondition => newCondition,
});

const { change } = actions;

export default handleActions({
    [change]: (state, action) => ({ ...state, ...action.payload })
}, {
    key: "",
    sex: -1,
    page: 1,
    limit: 10
})