export default {
    routes: [
        {
            exact: false,
            path: '/',
            component: '../layouts/index.js',
            routes: [
                {
                    exact: true,
                    path: '/',
                    component: './',
                    title: '首页',
                    wrappers:['@/routes/handleTitle.js']
                },
                { 
                    exact: true, 
                    path: '/login', 
                    component: './login', 
                    title: '登陆页',
                    wrappers:['@/routes/handleTitle.js']

                },
                { 
                    exact: true, 
                    path: '/welcome', 
                    component: './welcome', 
                    title: '欢迎页',
                    wrappers:['@/routes/privateRouter.js','@/routes/handleTitle.js']
                },
            ]
        },
    ],
}