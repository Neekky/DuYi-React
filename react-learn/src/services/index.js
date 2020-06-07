var app = require('express')(); //引入express库
var http = require('http').Server(app); //将express注册到http中

//当访问根目录时，返回Hello World
app.get('/', function (req, res) {
    console.log(__dirname)
    res.sendFile(__dirname + '/../pages/index.html');
});

//启动监听，监听3000端口
http.listen(3000, function () {
    console.log('listening on *:3000');
});