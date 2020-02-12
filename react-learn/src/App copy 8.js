import React, { Component } from 'react'

export default class App extends Component {
    state = {
        arr: [3, 5, 4, 7]
    }
    render() {
        const lis = this.state.arr.map(it => <li key={it}>{it}</li>)
        return (
            <div>
                <ul>
                    {lis}
                </ul>
                <button onClick={() => {
                    var n = parseInt(Math.random() * 1000);
                    let len = this.state.arr.length;
                    let newIndex = Math.floor(Math.random() * len);
                    let newArr = [...this.state.arr];
                    let arr1 = newArr.slice(0,newIndex);
                    let arr2 = newArr.slice(newIndex);
                    arr1.push(n)
                    let finArr = [...arr1,...arr2];
                    this.setState({
                        arr: finArr
                    })
                }}>向数组第一项添加随机数</button>
            </div>
        )
    }
}
