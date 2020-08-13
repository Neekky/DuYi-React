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
    }
}