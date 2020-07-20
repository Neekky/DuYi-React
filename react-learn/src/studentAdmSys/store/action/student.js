import { searchStudents } from '../../../services/student';

export const actionTypes = {
    change: Symbol("change"),
    setStudentAndTotal: Symbol("setStudentAndTotal"),
    setIsLoading: Symbol("setIsLoading")
}

/**
 * 改变查询参数
 * @param {*} newCondition 
 */
export function createChangeAction(newCondition) {
    return {
        type: actionTypes.change,
        payload: newCondition
    }
}

/**
 * 设置数据
 * @param {*} arr 
 * @param {*} total 
 */
export function setStudentAndTotal(arr, total) {
    return {
        type: actionTypes.setStudentAndTotal,
        payload: {
            datas: arr,
            total
        }
    }
}

/**
 * 设置加载状态 
 * @param {*} isLoading
 */
export function setIsLoading(isLoading) {
    return {
        type: actionTypes.setIsLoading,
        payload: isLoading
    }
}

/**
 * 根据当前仓库中的查询条件，查询学生
 */
// export function fetchStudents() {
//     return async function (dispatch, getState) {
//         dispatch(setIsLoading(true));
//         const condition = getState().students;
//         console.log(condition,'condition');
//         const resp = await searchStudents(condition);
//         dispatch(setStudentAndTotal(resp.datas, resp.cont));
//         dispatch(setIsLoading(false));
//     }
// }

// export function fetchStudents() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             const action = setStudentAndTotal([{ id: 1, name: 'zc' }, { id: 2, name: 'gg' }],100)
//             resolve(action);
//         },1000)
//     })
// }

// export async function fetchStudents(condition) {
//     const resp = await searchStudents(condition)
//     return setStudentAndTotal(resp.datas, resp.cont);
// }

export async function fetchStudents(condition) {
    return {
        type: actionTypes.setStudentAndTotal, 
        payload: await searchStudents(condition).then(resp => ({
            datas: resp.datas,
            total: resp.cont
        }))
    }
}