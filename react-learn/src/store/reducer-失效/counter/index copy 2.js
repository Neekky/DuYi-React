import { handleAction } from "redux-actions";
import { actionTypes } from "../../action/counter"

const reducer = handleAction("INCREASE", (state, action) => {
    return state + 1;
}, 10)
console.log(reducer,'reducer')
export default reducer;