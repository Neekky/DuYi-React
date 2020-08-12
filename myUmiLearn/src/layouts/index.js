import React from 'react'
import Menu from '../components/menu'

export default function index(props) {
    console.log(props,'ppprroops')
    return (
        <div>
            <h1>我是最大的</h1>
            <Menu />
            {props.children}
        </div>
    )
}
