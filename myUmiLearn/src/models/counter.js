export default {
    state: 0,
    reducers: {
        increase(state) {
            state++;
            return state;
        },
        decrease(state) {
            state--;
            return state;
        }
    },
    effects: {
        *asyncIncrease(action, saga) {
            console.log(saga,'saga',action)
        }
    }
}