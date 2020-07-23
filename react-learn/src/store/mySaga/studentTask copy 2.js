import { actionTypes, setIsLoading, setStudentsAndTotal, } from "../action/student/searchResult"
import { takeEvery, put, call, apply, select } from "redux-saga/effects"
import { searchStudents } from "../../services/student"

function* fetchStudents() {
    // 设置为正在加载中
    yield put(setIsLoading(true));
    // 按照当前仓库中的条件查询
    const state = yield select(state => state.students.condition);
    console.log(state,'查看状态')
    // 使用call指令
    const resp = yield call([this,searchStudents],state);
    // const resp = yield call({
    //     fn: searchStudents,
    //     context: 'asdasd'
    // }, { page: 2, limit: 20 });

    // 使用apply指令
    // const resp = yield apply(this,searchStudents,[{page:2,limit:20}]);

    console.log(resp, '服务器响应结果')
    yield put(setStudentsAndTotal(resp.datas, resp.count));
    yield put(setIsLoading(false));
}

export default function* () {
    yield takeEvery(actionTypes.fetchStudents, fetchStudents)
    console.log('正在监听 fetchStudents');
}