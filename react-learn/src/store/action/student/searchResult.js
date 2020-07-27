import { createActions, handleActions } from 'redux-actions';

export const { setStudentsAndTotal, setIsLoading, fetchStudents } = createActions({
    SET_STUDENTS_AND_TOTAL: (arr, total) => ({ datas: arr, total }),
    SET_IS_LOADING: isLoading => isLoading,
    FETCH_STUDENTS: null
});

export const actionTypes = {
    //设置学生查询结果数组和总数
    setStudentsAndTotal: Symbol("setStudentsAndTotal"),
    setIsLoading: Symbol("setIsLoading"),
    fetchStudents: Symbol("fetchStudents")
}

export default handleActions(
    {
        [setStudentsAndTotal]: (state, action) => ({ ...state, ...action.payload }),
        [setIsLoading]: (state, action) => ({ ...state, isLoading: action.payload })
    },
    {
        datas: [],
        total: 0,
        isLoading: false
    }
);