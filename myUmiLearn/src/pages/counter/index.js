import React from 'react'
import MyCounter from '../../components/Counter'

Counter.title = '计数器'

function Counter() {
    return (
        <div>
            <h1>
                计数器
            </h1>
            <MyCounter />
        </div>
    )
}

export default Counter

