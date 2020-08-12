import React, { useRef } from 'react'

export default function login(props) {
    const loginId = useRef();
    const loginPwd = useRef();
    return (
        <div>
            <p>
                账号：<input ref={loginId} type="text" />
            </p>
            <p>
                密码：<input ref={loginPwd} type="password" />
            </p>
            <p>
                <button onClick={() => {
                    if (loginPwd.current.value === '123123') {
                        localStorage.setItem('loginId', loginId.current.value);
                        props.history.push('/welcome')
                    } else {
                        alert('账号或密码错误')
                    }
                }}>登陆</button>
            </p>
        </div>
    )
}
