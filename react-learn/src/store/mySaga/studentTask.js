import { actionTypes, setIsLoading, setStudentsAndTotal,  } from "../action/student/searchResult"
import { takeEvery, put, cps, select } from "redux-saga/effects"

function* fetchStudents() {
    // 设置为正在加载中
    yield put(setIsLoading(true));
}

export default function* () {
    yield takeEvery(actionTypes.fetchStudents, fetchStudents)
    console.log('正在监听 fetchStudents'); 
    yield 
}