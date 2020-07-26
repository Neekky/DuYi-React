import { delay, put, cancel, fork, take, takeLatest, cancelled } from "redux-saga/effects"
import { actionTypes, increase } from "../action/counter"

/**
 * 使用cancelled
 */
function* autoTask() {
    while (true) {
        yield take(actionTypes.autoIncrease); // 只监听autoIncrease
        const task = yield fork(function* () {
            try {
                while (true) {
                    yield delay(2000);
                    yield put(increase())
                }
            }
            finally {
                if (yield cancelled()) {
                    console.log('被关闭了')
                }
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