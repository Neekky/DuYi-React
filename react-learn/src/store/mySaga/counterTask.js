import { race, call, put } from "redux-saga/effects"
import { increase, decrease } from "../action/counter"

// 异步的得到一个action
function asyncAction() {
    var duration = Math.floor(Math.random() * 1000 + 1000);
    return new Promise(resolve => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve(increase())
            }
            else {
                resolve(decrease());
            }
        }, duration);
    })
}

export default function* () {
    var result = yield race({
        action1: yield call(asyncAction),
        action2: yield call(asyncAction)
    })
    console.log("看看你是啥", result);
    let action = Object.entries(result)[0][1];
    yield put(action)
}