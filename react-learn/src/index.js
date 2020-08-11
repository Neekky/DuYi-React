import React from 'react';
import App from "./App"
import dva from "dva";
import counterModel from "./models/counter"
import studentsModel from "./models/students"
// import myDvaPlugin from "./myDvaPlugin"
import createLoading from 'dva-loading'

//得到一个dva对象
const app = dva({
    onStateChange(state){
        console.log(state)
    }
});

// app.use(myDvaPlugin);

app.use(createLoading({
    namespace: 'abc'
})); // 使用dva-loading插件

//在启动之前定义模型
app.model(counterModel)
app.model(studentsModel)

//设置根路由，即启动后，要运行的函数，函数的返回结果会被渲染
app.router(() => <App />)

app.start("#root")