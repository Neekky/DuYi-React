import React from 'react'

export default function _layout(props) {
    return (
        <div>
            <h1>学生管理列表</h1>
            {props.children}
        </div>
    )
}
