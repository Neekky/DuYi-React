import "./pages.css"
import React from 'react'
import { NavLink } from "react-router-dom"

export function NavBar() {
    return (
        <div className="header">
            <NavLink to="/home" exact>首页</NavLink>
            <NavLink to="/news" exact>新闻页</NavLink>
            <NavLink to="/personal" exact>个人中心</NavLink>
        </div>
    )
}

export function Home() {
    return <div className="page home">
        <h1>首页</h1>
        <a href="alipay://">跳转</a>
        <video
            src="blob:https://www.bilibili.com/580ee34e-d310-4f0f-94f9-217212f30b69"
            style={{ width: '300px', height: '200px' }}
            width="400px"
            height="400px"
            preload="preload"
            controls="controls" 
            autoPlay="autoplay"
            x-webkit-airplay="true" 
            x5-video-player-fullscreen="true"
            playsInline 
            webkit-playsinline="true"
            x5-video-player-type="h5-page"
            poster="https://static.caibeike.com/i/af4a8d135786ffcc0ffda0ef49f0ab4d-osG00u-biAweghp1"
        >
        </video>
    </div>
}

export function News() {
    return <div className="page news">
        <h1>新闻页</h1>
    </div>
}

export function Personal() {
    return <div className="page personal">
        <h1>个人中心</h1>
    </div>
}