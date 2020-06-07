//使用socket.io直接启动http服务
var io = require("socket.io").listen(PORT);
io.sockets.on("connection', function (socket) { socket.on('message", function (message) {
    var mData = chatLib.analyzeMessageData(message);
    if (mData && mData.EVENT) {
        switch (mData.EVENT) {
            case EVENT_TYPE.LOGIN:// 新用户连接
                var newUser = { uid: socket.id, 'nick': chatLib.getMsgFirstDataValue(mData) };
                //把新连接的用户增加到在线用户列表 onlineUserMap.put(socket.id, newUser);
                //把新用户的信息广播给在线用户 
                var data = JSON.stringify({
                    'user': onlineUserMap.get(socket.id,
                    'EVENT': EVENT_TYPE.LOGIN,
                    'values': newUser,
                    'users': onlineUserMap.values,
                    'historyContent': rhistoryContent.values()
                });
                Io.sockets.emit('message1, data');//广播
                socket.broadcast.emit('message', data);//无效 break;


                function (exports) {
                    //事件类型
                    exports.EVENT_TYPS = {}

                    //服务靖口
                    exports.PORT = 80;

                    //服务靖口
                    exports.HOST.MlocalhostM;
                    LOGOUTLOGOUT_SPEAK1: 'SPEAK1'
                    var analyzeMessageData = exports.analyzeMessageData = function (message)
        try {
                        return JSOK.parse(message);
                    } catch (error) {
                        //收到了非正常格式的数据
                        console.log('method'
                analyzeMsgData, error: 1 + error);
                        return null;
                    }