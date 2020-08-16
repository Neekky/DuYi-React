import logger from 'redux-logger'

export function patchRoutes(routes) {
    // 动态配置路由
    // 参数routes是默认的路由配置
    console.log(routes.routes[0].routes);
    // routes.routes[0].routes.shift();
    console.log(routes.routes[0].routes);
    // 动态改变路由
}

export const dva = {
    config: {
        onAction: [logger]
    },
    plugins: []
} 