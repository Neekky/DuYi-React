import React from 'react'
import { Link, NavLink, history, withRouter } from 'umi';
import './Menu.css'
import styles from '../assets/css/link.css'

export default withRouter(function menu(props) {
    return (
        <div>
            <NavLink exact activeClassName='global-active' to="/">首页</NavLink>
            <NavLink activeClassName='global-active' to="/login">登陆页</NavLink>
            <NavLink activeClassName='global-active' to="/welcome">欢迎页</NavLink>
            <NavLink activeClassName='global-active' to="/counter">计数器</NavLink>
            <button onClick={() => {
                history.push('/student/list');
            }}>学生</button>
        </div>
    )
})
