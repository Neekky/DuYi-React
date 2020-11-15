import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props)
        console.log('子组件constructor')
    }
    state = {}
    componentWillMount() {
        console.log("子组件componentWillMount");
    }

    componentDidMount() {
        console.log("子组件componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("子组件componentWillReceiveProps");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("子组件shouldComponentUpdate")
        // if (this.props.n === nextProps.n && this.state.n === nextState.n) {
        //     return false;
        // }
        return true;
        // return false;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("子组件componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("子组件componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("子组件componentWillUnmount")
    }

    render() {
        console.log('子组件render')
        const { test } = this.props;
        return (
            <div>
                父组件传值：{test}
            </div>
        )
    }
}
