import { delay, put, cancel, fork, take, takeLatest } from "redux-saga/effects"
import { actionTypes, increase } from "../action/counter"

/**
 * 自动增加和停止的流程控制-方案三
 * 流程：自动增加 -> 停止 -> 自动增加 -> 停止
 */
function* autoTask() {
    while (true) {
        yield take(actionTypes.autoIncrease); // 只监听autoIncrease
        const task = yield fork(function* () {
            while (true) {
                yield delay(2000);
                yield put(increase())
            }
        });
        yield take(actionTypes.stopAutoIncrease); // 转而监听stopAutoIncrease
        yield cancel(task)
    }
}


export default function* () {
    yield fork(autoTask);
    console.log("正在监听autoTask");
}