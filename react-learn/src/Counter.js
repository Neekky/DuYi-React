import React, { useRef } from 'react'
import { connect } from './myDva'

function Counter(props) {
    const inp = useRef();
    return (
        <div>
            <h1>{props.number}</h1>
            <button onClick={props.onAsyncIncrease}>异步加</button>
            <button onClick={props.onIncrease}>加</button>
            <button onClick={props.onDecrease}>减</button>
            <button onClick={props.onAsyncDecrease}>异步减</button>
            <p>
                <input type="number" ref={inp} />
                <button onClick={()=>{props.onAdd(inp.current.value)}}>加上</button>
            </p>
        </div>
    )
}

const mapStateToProps = state => {
    return { number: state.counter }
}

const mapDispatchToProps = dispatch => ({
    onAsyncIncrease: () => {
        dispatch({
            type: 'counter/asyncIncrease'
        })
    },
    onAsyncDecrease: () => {
        dispatch({
            type: 'counter/asyncDecrease'
        })
    },
    onIncrease: () => {
        dispatch({
            type: 'counter/increase'
        })
    },
    onDecrease: () => {
        dispatch({
            type: 'counter/decrease'
        })
    },
    onAdd: (num) => {
        dispatch({
            type: 'counter/add',
            payload: +num
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);