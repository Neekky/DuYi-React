import React, { Component } from 'react'

export default class Login extends Component {
    componentDidMount(){
        console.log(this.props.match.params.id);
    }
    render() {
        return (
            <div>
                <h1>登录页</h1>
            </div>
        )
    }
}
