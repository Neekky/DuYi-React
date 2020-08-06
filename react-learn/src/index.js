import { dva } from "./myDva";
import counterModel from "./models/counter";
import agreeModel from "./models/agree";
import routerConfig from "./routerConfig";

// 得到一个dva对象
const app = dva();

// 设置根路由
// app.router(App);
app.router(routerConfig);

// 在启动之前定义模型
app.model(counterModel);
app.model(agreeModel);

app.start("#root");