import store from "./index"
import { increase, decrease, asyncIncrease, autoIncrease, stopAutoIncrease, asyncDecrease, add } from "./action/counter"
import { fetchStudents } from './action/student/searchResult'

window.autoIncrease = function () {
    store.dispatch(autoIncrease())
}

window.stopAutoIncrease = function () {
    store.dispatch(stopAutoIncrease())
}

window.fetchStudents = function () {
    store.dispatch(fetchStudents());
}

window.increase = function () {
    store.dispatch(increase());
}

window.decrease = function () {
    store.dispatch(decrease());
}

window.asyncIncrease = function () {
    store.dispatch(asyncIncrease());
}

window.asyncDecrease = function () {
    store.dispatch(asyncDecrease());
}

window.add = function (n) {
    store.dispatch(add(n));
}