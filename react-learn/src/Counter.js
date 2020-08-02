import React from 'react'
import { connect } from 'dva'

function Counter(props) {
    return (
        <div>
            <h1>{props.number}</h1>
            <button onClick={props.onIncrease}>加</button>
            <button onClick={props.onDecrease}>减</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return { number: state.counter }
}

export default connect(mapStateToProps)(Counter);