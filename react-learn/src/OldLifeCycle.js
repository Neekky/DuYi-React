import React, { Component } from 'react'
import OldChild from './OldChild'

export default class OldLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 0
        };
        // setInterval(()=>{
        //     this.setState({
        //         n:1
        //     })
        // },2000)
        // this.setState({
        //     n:1
        // })
        console.log("父组件constructor");
    }


    componentWillMount() {
        console.log("父组件componentWillMount");
    }

    componentDidMount() {
        console.log("父组件componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("父组件componentWillReceiveProps");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("父组件shouldComponentUpdate")
        if (this.props.n === nextProps.n && this.state.n === nextState.n) {
            return false;
        }
        return true;
        // return false;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("父组件componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("父组件componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("父组件componentWillUnmount")
    }


    render() {
        console.log("父组件render");
        return (
            <div>
                {/* <h1>旧版生命周期组件</h1> */}
                <h2>属性n: {this.props.n}</h2>
                <h2>状态n：{this.state.n}</h2>
                <button onClick={() => {
                    this.setState({
                        n: this.state.n + 1
                    })
                }}>状态n+1</button>
                <OldChild test={this.state.n} />
            </div>
        )
    }
}
