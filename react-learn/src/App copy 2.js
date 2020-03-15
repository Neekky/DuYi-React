import React, { useState, useReducer, useEffect, useCallback } from 'react'

window.arr = [];

const set = new Set();

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



export default function Parent() {
    const [count, setCount] = useState(1);
    const [val, setVal] = useState('');
 
    const callback = useCallback(() => {
        return count;
    }, [count]);
    return <div>
        <h4>父组件{count}</h4>
        <Child callback={callback}/>
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <input value={val} onChange={event => setVal(event.target.value)}/>
        </div>
    </div>;
}

function Child({ callback }) {
    const [count, setCount] = useState(callback());
    useEffect(() => {
        setCount(callback());
    }, [callback]);
    return <div>
        子组件{count}
    </div>
}

// export default function App() {
//     // const [state, dispatch] = useReducer(reducer, 1, init);
//     const [count, setCount] = useState(1);
//     const [val, setVal] = useState('')

//     const callback = useCallback(() => {
//         console.log(count);
//     }, [count]);
//     set.add(callback);
//     return (
//         <>
//             <h4>count: {count}</h4>
//             <h4>{set.size}</h4>
//             {/* <button
//                 onClick={() => dispatch({ type: 'reset', payload: 5 })}>
//                 Reset
//             </button> */}
//             <button onClick={() => setCount(count + 1)}>+</button>
//             <input value={val} onChange={event => setVal(event.target.value)}/>
//         </>
//     )
// }


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
