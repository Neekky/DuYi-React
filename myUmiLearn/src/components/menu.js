import React from 'react'
import { Link, NavLink, history, withRouter } from 'umi';

export default withRouter(function menu(props) {
    console.log(props,'props')
    return (
        <div>
            <NavLink to="/">首页</NavLink>
            <NavLink to="/user">用户</NavLink>
            <NavLink to="/counter/add">累加器</NavLink>
            <button onClick={() => {
                history.push('/student/list');
            }}>学生</button>
        </div>
    )
})
