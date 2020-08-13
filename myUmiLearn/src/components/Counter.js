import React from 'react'
import { connect } from 'dva'
import styles from './Counter.less'
import button from '../assets/css/link.css'

console.log(button)
function Counter({ number, onIncrease, onDecrease, onAsyncIncrease }) {
    return (
        <div className={styles['counter-wrapper']}>
            <h1 className={styles['title']}>{number}</h1>
            <p>
                <button className={button['button']} onClick={onIncrease}>增加</button>
                <button className={button['button']} onClick={onDecrease}>减少</button>
                <button className={button['button']} onClick={onAsyncIncrease}>异步增加</button>
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
    onAsyncIncrease() {
        dispatch({ type: 'counter/asyncIncrease' })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)