import React, { useEffect } from 'react'
import Menu from '../components/menu'

export default function index(props) {
    const config = props.route.routes.find(config => config.path === props.location.pathname)
    let title = 'Umi';
    useEffect(() => {
        if (config && config.title) {
            title = config.title;
        }
        document.title = title;
    }, [config])
    return (
        <div>
            <h1>我是最大的</h1>
            <Menu />
            {props.children}
        </div>
    )
}
