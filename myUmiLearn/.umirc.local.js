export default {
    // 相当于webpack中devServer中的proxy配置
    proxy: {
        "/api": {
            target: "http://api.duyiedu.com",
            changeOrigin: true
        }
    }
}