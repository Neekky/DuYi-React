import { actionTypes, setIsLoading, setStudentsAndTotal, } from "../action/student/searchResult"
import { takeEvery, put, call, apply, select, cps } from "redux-saga/effects"
import { searchStudents } from "../../services/student"

/**
 * 回调模式的异步
 * @param {*} callback 
 */
function mockStudents(condition, callback) {
    console.log("mockStudents", condition);
    setTimeout(() => {
        callback(null,1231321)
    }, 1000);
}


function* fetchStudents() {
    // 设置为正在加载中
    yield put(setIsLoading(true));
    // 按照当前仓库中的条件查询
    const state = yield select(state => state.students.condition);

    // 使用call指令
    const resp = yield call([this,searchStudents],state);

    // 使用cps指令
    const test = yield cps(mockStudents,state);

    console.log(test,'是个啥呀')
    yield put(setStudentsAndTotal(resp.datas, resp.count));
    yield put(setIsLoading(false));
}

export default function* () {
    yield takeEvery(actionTypes.fetchStudents, fetchStudents)
    console.log('正在监听 fetchStudents');
}