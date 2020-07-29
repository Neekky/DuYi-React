// 创建一个唯一的reducer
import students from "./student"
import counter from "./counter"
import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import history from "../history"

export default combineReducers({
    students,
    counter,
    router: connectRouter(history)
})