function createThunkMiddleware(extra) {
    return store => next => action => {
        if (typeof action === 'function') {
            return action(store.dispatch, store.getState, extra)
        }
        return next(action);
    }
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;