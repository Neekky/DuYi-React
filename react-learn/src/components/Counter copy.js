import React from 'react'
import store from "../store"
import { asyncDecrease, asyncIncrease, increase, decrease } from "../store/action/counter"

//展示组件
function Counter(props) {
    return (
        <div>
            <h1>{props.number}</h1>
            <p>
                <button onClick={props.onAsyncDecrease}> 异步减 </button>
                <button onClick={props.onDecrease}> 减 </button>
                <button onClick={props.onIncrease}> 加 </button>
                <button onClick={props.onAsyncIncrease}> 异步加 </button>
            </p>
        </div>
    )
}

/**
 * 将整个仓库的状态，映射到当前需要的数据
 * @param {*} state 
 */
function mapStateToProps(state) {
    return {
        number: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAsyncDecrease() {
            dispatch(asyncDecrease())
        },
        onDecrease() {
            dispatch(decrease())
        },
        onIncrease() {
            dispatch(increase())
        },
        onAsyncIncrease() {
            dispatch(asyncIncrease())
        },
    }
}

//connect高阶容器组件
export default class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        // 从redux仓库中获取所有的状态
        this.state = mapStateToProps(store.getState());
        // 当仓库状态发生变化时，重新设置组件的状态，从而触发页面重新渲染
        store.subscribe(() => {
            this.setState(mapStateToProps(store.getState()))
        })
    }

    render() {
        // 将dispatch事件和状态传给子组件
        const eventHandlers = mapDispatchToProps(store.dispatch)
        return <Counter {...this.state} {...eventHandlers} />
    }
}