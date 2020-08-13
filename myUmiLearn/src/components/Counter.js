import React from 'react'
import { connect } from 'dva'

function Counter({ number, onIncrease, onDecrease }) {
    return (
        <div>
            <h1>{number}</h1>
            <p>
                <button onClick={onIncrease}>增加</button>
                <button onClick={onDecrease}>减少</button>
            </p>
        </div>
    )
}

const mapStateToProps = state => ({
    number: state.counter
});

const mapDispatchToProps = dispatch => ({
    onIncrease() {
        dispatch({ type: 'counter/increase' })
    },
    onDecrease() {
        dispatch({ type: 'counter/decrease' })
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)