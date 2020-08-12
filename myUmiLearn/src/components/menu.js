import React from 'react'
import { Link, NavLink, history, withRouter } from 'umi';

export default withRouter(function menu(props) {
    return (
        <div>
            <NavLink to="/">首页</NavLink>
            <NavLink to="/login">登陆页</NavLink>
            <NavLink to="/welcome">欢迎页</NavLink>
            <button onClick={() => {
                history.push('/student/list');
            }}>学生</button>
        </div>
    )
})
