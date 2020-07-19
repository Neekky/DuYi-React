export function compose(...funcs) {
    if (funcs.length === 0) {
        return args => args; //如果没有要组合的函数，则返回的函数原封不动的返回参数
    } else if (funcs.length === 1) {
        //要组合的函数只有一个
        return funcs[0];
    }
    // return funcs.reduce((a, b) => (...args) => a(b(...args)));

    return function (...args) {
        let lastReturn = null; // 记录上一个函数返回的值
        for (let i = funcs.length - 1; i >= 0; i--) {
            const func = funcs[i];
            if (i === funcs.length - 1) {
                lastReturn = func(...args);
            } else {
                lastReturn = func(lastReturn);
            }
        }

        return lastReturn;
    }

}

// function func1(n) {
//     return n * 2;
// }

// function func2(n) {
//     return n + n
// }

// function func3(n) {
//     return n - 5
// }

// [func1, func2, func3].reduce((a,b)=>(...args) => a(b(...args)));

/**
 * (...args) => func1(func2(...args)), func3
 * (...args) => ((...args) => func1(func2(...args)))(func3(...args)) 
 * 函数执行变成如下代码
 * (...args) => func1(func2(func3(...args)))
 */