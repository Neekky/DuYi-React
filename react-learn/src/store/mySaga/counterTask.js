import { takeEvery, delay, put } from "redux-saga/effects"
import { actionTypes, increase, decrease } from "../action/counter"

function* counterTask1() {
    yield delay(2000);
    yield console.log('counterTask1');
    yield put(increase());
}

function* counterTask2() {
    yield delay(2000);
    yield console.log('counterTask2');
    yield put(decrease());
}

export default function* () {
    const action1 = yield takeEvery(actionTypes.asyncIncrease, counterTask1)
    const action2 = yield takeEvery(actionTypes.asyncDecrease, counterTask2)
    console.log("正在监听async-increase", action1, action2);
}