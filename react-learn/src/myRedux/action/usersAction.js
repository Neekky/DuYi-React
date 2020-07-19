import { getAllStudents } from '../..//services/student'

export const ADDUSER = Symbol("add-user");
export const DELETEUSER = Symbol("delete-user");
export const UPDATEUSER = Symbol("update-user");
export const SETUSERS = Symbol("set-users")
export const SETLOADING = Symbol("set-loading"); //设置加载状态

export const createAddUserAction = (user) => ({
    type: ADDUSER,
    payload: user
})

export const createDeleteUserAction = (id) => ({
    type: DELETEUSER,
    payload: id
})

export const createUpdateUserAction = (id, newUserData) => ({
    type: DELETEUSER,
    payload: {
        ...newUserData,
        id
    }
})

export const createSetUsersAction = (users) => ({
    type: SETUSERS,
    payload: users //用户数组
})

/**
 * 返回一个设置加载状态的action
 * @param {*} users 
 */
export const createSetLoadingAction = (isLoading) => ({
    type: SETLOADING,
    payload: isLoading //是否正在加载
})

export function fetchUsers() {
    return async function(dispatch) {
        dispatch(createSetLoadingAction(true)); // 正在加载
        await getAllStudents().then(resp => {
            const action = createSetUsersAction(resp);
            dispatch(action); 
            dispatch(createSetLoadingAction(false)); // 加载完成
        })
    }
}