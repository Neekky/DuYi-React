import { delay, put, cancel, fork, take, takeLatest } from "redux-saga/effects"
import { actionTypes, increase } from "../action/counter"

/**
 * 自动增加和停止的流程控制-方案一
 * 流程：自动增加 -> 停止 -> 自动增加 -> 停止
 */
function* autoIncrease() {
    while (true) {
        yield delay(2000);
        yield put(increase());
    }
}

export default function* () {
    yield takeLatest(actionTypes.autoIncrease, autoIncrease);
    console.log("正在监听autoIncrease");
}