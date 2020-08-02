import React from 'react';
import App from "./App";
import dva from "dva";
import counterModel from "./models/counter";
import agreeModel from "./models/agree";

// 得到一个dva对象
const app = dva();

// 设置根路由
// app.router(App);
app.router(() => <App />);

// 在启动之前定义模型
app.model(counterModel);
app.model(agreeModel);

app.start("#root");