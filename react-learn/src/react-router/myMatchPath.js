import pathToRegexp from "path-to-regexp";

// const key = [];
// const result = pathToRegexp("/home/:id/:live(\\d+)", key);
// console.log(result.exec('/home/asdds/live213'));
// console.log(key);

/**
 * 
 * 得到匹配结果（match对象），如果没有匹配，返回null
 * @param {*} path 路径规则
 * @param {*} url 
 * @param {*} options 相关配置，该配置是一个对象，该对象中，可以出现：exact、sensitive、strict 
 */
export default function pathMatch(path, url, options) {
    console.log(window.location)
    const keys = []; // 保存路径规则中的关键字
    const regExp = pathToRegexp(path, keys, getOptions(options));
    const result = regExp.exec(url); // 匹配url地址
    if (!result) {
        console.log(undefined)
        return;
    }
    let groups = Array.from(result).slice(1);
    const params = getParams(groups, keys);
    if (!params) {
        return null;
    }
    console.log(result,'看看结果是啥')
    return {
        isExact: url === result[0],
        params,
        path,
        url:result[0],
    }
}

/**
 * 将传入的react-router配置，转换为path-to-regexp的配置
 * @param {*} options 
 */
function getOptions(options = {}) {
    const defaultOptions = {
        exact: false,
        sensitive: false,
        strict: false
    }
    const opts = { ...defaultOptions, ...options };
    return {
        sensitive: opts.sensitive,
        strict: opts.strict,
        end: opts.exact
    }
}

/**
 * 根据匹配的分组结果，得到一个params对象
 * @param {*} groups 
 * @param {*} keys 
 */
function getParams(groups, keys) {
    const obj = {};
    for (let i = 0; i < groups.length; i++) {
        const value = groups[i];
        const name = keys[i].name;
        obj[name] = value;
    }
    return obj;
}

console.log(pathMatch('/home/:id/:name', '/home/321123/peter'))