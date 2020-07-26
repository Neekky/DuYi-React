import { delay, put, cancel, fork, take, takeLatest, cancelled, race, call } from "redux-saga/effects"
import { actionTypes, increase, decrease } from "../action/counter"

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
        action1: call(asyncAction),
        action2: call(asyncAction)
    })
    console.log("看看你是啥", result);
}