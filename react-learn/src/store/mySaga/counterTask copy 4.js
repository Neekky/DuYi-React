import { delay, put, cancel, fork, take, takeEvery } from "redux-saga/effects"
import { actionTypes, increase } from "../action/counter"

// 实现一个takeEvery
// function* takeEvery(actionType, saga) {
//     return yield fork(function* () {
//         while (true) {
//             const action = yield take(actionType);
//             yield fork(saga)
//         }
//     });
// }

let task;

function* autoIncrease() {
    task && (yield cancel(task));
    while (true) {
        yield delay(2000);
        yield put(increase());
    }
}

export default function* () {
    task = yield takeEvery(actionTypes.autoIncrease, autoIncrease)
    console.log("正在监听autoIncrease");
}