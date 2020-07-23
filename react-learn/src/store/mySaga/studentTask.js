import { actionTypes, setIsLoading, setStudentsAndTotal,  } from "../action/student/searchResult"
import { takeEvery, put, cps, select } from "redux-saga/effects"
import {searchStudents} from "../../services/student"

function* fetchStudents() {
    // 设置为正在加载中
    yield put(setIsLoading(true));
    const resp = yield searchStudents();
    console.log(resp,'服务器响应结果')
}

export default function* () {
    yield takeEvery(actionTypes.fetchStudents, fetchStudents)
    console.log('正在监听 fetchStudents'); 
}