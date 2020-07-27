import { handleActions } from "redux-actions";
import { increase, decrease, add } from "../../action/counter"

// 使用handleActions

const reducer = handleActions({
    [increase]: (state, action) => state + 1,
    [decrease]: (state, action) => state - 1,
    [add]: (state, action) => state + action.payload
}, 10)
export default reducer;