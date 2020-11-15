import React, { Component } from 'react'
import Child from './NewChild'

export default class NewLifeCycle extends Component {

    state = {
        n: this.props.n
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("父组件getDerivedStateFromProps");
        // return null;//不改变当前状态
        return { //用新的对象替换掉之前的状态
            n: nextProps.n
        }
    }

    componentDidMount() {
        console.log('父组件componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('父组件shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log('父组件getSnapshotBeforeUpdate');
        return 132;
    }

    componentDidUpdate(prevProps, prevState, snap) {
        console.log("父组件componentDidUpdate");
    }


    render() {
        console.log('父组件render')
        return (
            <div>
                <h1>{this.state.n}</h1>
                <p>
                    <button onClick={() => {
                        this.setState({
                            n: this.state.n + 1
                        });
                    }}>+1</button>
                </p>
                <Child test={this.state.n} />
            </div>
        )
    }
}
