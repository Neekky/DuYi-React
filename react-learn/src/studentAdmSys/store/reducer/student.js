import { actionTypes } from '../action/student';

// 默认状态
const initialState = {
    // 查询条件
    key: "",
    sex: -1,
    page: 2,
    limit: 20,

    // 查询结果
    datas: [],
    total: 0,
    isLoading: false
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        // 查询条件
        case actionTypes.change:
            return { ...state, ...payload };
        // 查询结果
        case actionTypes.setStudentAndTotal:
            return { ...state, ...payload }
        case actionTypes.setIsLoading: 
            return {...state, isLoading: payload}
        default:
            return state;
    }

}