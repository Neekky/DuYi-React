import React from 'react'

export default function activity(props) {
    return (
        <div>
            <h1>活动页面{props.match.params.random}</h1>
        </div>
    )
}
