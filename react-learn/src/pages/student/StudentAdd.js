import React from 'react'
import { push } from "connected-react-router"
import { connect } from "react-redux"

function StudentAdd({ onClick, router }) {
    console.log(router,'123123')
    return (
        <div>
            <h1>添加学生页</h1>
            <button onClick={() => {
                onClick && onClick()
            }}>点击跳转到课程列表</button>
        </div>
    )
}

const mapStateToProps = function (state, props) {
    return {
        router: state.router.location.pathname
    }
}

const mapDispatchToProps = dispatch => ({
    onClick: () => {
        dispatch(push("/courses"))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentAdd)
