export default {
    namespace: 'counter',
    state: 0,
    reducers: {
        increase(state) {
            return state + 1;
        },
        decrease(state) {
            return state - 1;
        },
        add(state, { payload }) {
            return state + payload;
        }
    },
    effects: {
        *asyncIncrease(action, saga) {
            yield saga.call(delay, 2000);
            yield saga.put({ type: 'increase' })
        },
        *asyncDecrease(action, saga) {
            yield saga.call(delay, 2000);
            yield saga.put({ type: 'decrease' })
        },
    },
    subscriptions: {
        resizeIncrease({ dispatch }) {
            window.onresize = () => {
                dispatch({ type: 'increase' })
            }
        },
        // resizeDecrease(obj) {
        //     console.log(obj)
        //     obj.history.listen(() => {
        //         obj.dispatch({ type: 'decrease' })
        //     })
        // }
    }
}

function delay(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}