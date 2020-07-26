import { takeEvery, delay, put, fork, take, cancel } from "redux-saga/effects"
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

function* asyncIncrease() {
    let prevTask;
    while (true) {
        yield take(actionTypes.asyncIncrease);
        //监听到了action，并且在开启新任务之前，取消之前的任务
        if (prevTask) {
            yield cancel(prevTask);
        }
        prevTask = yield fork(function* () {
            yield delay(2000);
            yield put(increase());
        })
    }
}

function* asyncDecrease() {
    while (true) {
        yield take(actionTypes.asyncDecrease)
        yield fork(function* () {
            yield delay(2000);
            yield put(decrease());
        })
    }
}

export default function* () {
    yield fork(asyncIncrease);
    yield fork(asyncDecrease)
    // const action1 = yield takeEvery(actionTypes.asyncIncrease, counterTask1)
    // const action2 = yield takeEvery(actionTypes.asyncDecrease, counterTask2)
    console.log("正在监听async-increase asyncDecrease");
}