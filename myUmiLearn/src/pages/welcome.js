import React from 'react'

export default function welcome({history}) {
    const loginId = localStorage.getItem('loginId')
    return (
        <div>
            欢迎光临，{loginId}
            <p>
                <button onClick={() => {
                    localStorage.removeItem("loginId");
                    history.push('/login')
                }}>注销</button>
            </p>
        </div>
    )
}
