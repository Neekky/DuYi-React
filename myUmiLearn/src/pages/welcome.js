import React from 'react'
import { Button } from 'antd'

export default function welcome({ history }) {
    const loginId = localStorage.getItem('loginId')
    return (
        <div>
            欢迎光临，{loginId}
            <p>
                <Button onClick={() => {
                    localStorage.removeItem("loginId");
                    history.push('/login')
                }}>注销</Button>
            </p>
        </div>
    )
}
