import { delay, put, cancel, fork, take, takeLatest } from "redux-saga/effects"
import { actionTypes, increase } from "../action/counter"

/**
 * 自动增加和停止的流程控制-方案二
 * 流程：自动增加 -> 停止 -> 自动增加 -> 停止
 */
let isStop = false;

function* autoIncrease() {
    isStop = false;
    while (true) {
        yield delay(2000);
        if (isStop) {
            break;
        }
        yield put(increase());
    }
}

function stopAutoIncrease() {
    isStop = true;
}

export default function* () {
    yield takeLatest(actionTypes.autoIncrease, autoIncrease);
    yield takeLatest(actionTypes.stopAutoIncrease, stopAutoIncrease);
    console.log("正在监听autoIncrease");
}