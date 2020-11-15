import React, { Component } from 'react'

export default class Child extends Component {
    state = {}
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('子组件getDerivedStateFromProps')
        return { nextProps }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('子组件getSnapshotBeforeUpdate');
        return 132;
    }

    componentDidMount() {
        console.log('子组件componentDidMount')
    }

    componentDidUpdate(prevProps, prevState, snap) {
        console.log('子组件componentDidUpdate');
    }

    shouldComponentUpdate() {
        console.log('子组件shouldComponentUpdate')
        return true
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
