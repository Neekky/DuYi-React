import React from 'react'
import { Link } from 'umi'

export default function privateRouter(props) {
    let loginId = localStorage.getItem('loginId');
    console.log(typeof loginId,'loginId')
    if(loginId) {
        return props.children;
    } else {
        document.title = '请先登录';
        return (
            <div>
                <p>
                    该页面需要先登录才能访问，<Link to='/login'>请先登陆</Link>
                </p>
            </div>
        );
    }
}
