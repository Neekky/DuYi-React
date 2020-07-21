import { takeEvery } from "redux-saga/effects"
import { actionTypes } from "../action/counter"

function* counterTask1() {
    yield console.log('counterTask1')
}

function* counterTask2() {
    yield console.log('counterTask2')
}

export default function* () {
    const action1 = yield takeEvery(actionTypes.asyncIncrease, counterTask1)
    const action2 = yield takeEvery(actionTypes.asyncDecrease, counterTask2)
    console.log("正在监听async-increase", action1, action2);
}