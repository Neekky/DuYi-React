import React from 'react'

export default function index(props) {
    console.log(props)
    return (
        <div>
            <h1>我的ID是{props.match.params.id}</h1>
        </div>
    )
}
