import React, { useState, useReducer } from 'react'

window.arr = [];

function init(initialCount) {
    return { count: initialCount };
}

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, 1, init);

    return (
        <>
            count: {state.count}
            <button
                onClick={() => dispatch({ type: 'reset', payload: 5 })}>
                Reset
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    )
}


// export default function App() {
//     console.log("xuanran")
//     const [visible, setVisible] = useState(true);
//     const [n, setN] = useState(0);
//     window.arr.push(setN);
//     return <div>
//         <p style={{ display: visible ? "block" : "none" }}>
//             <button onClick={() => {
//                 setN(n - 1)
//             }}>-</button>
//             <span>{n}</span>
//             <button onClick={() => {
//                 setN(n + 1)
//             }}>+</button>
//         </p>
//         <button onClick={() => {
//             setVisible(!visible);
//         }}>显示/隐藏</button>
//     </div>
// }
