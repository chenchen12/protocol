const net = require('net');

//创建一个tcp服务（一般做游戏用tcp通讯,端游）
var server =net.createServer(function(){
    console.log('some on connect');
});
//设置监听端口
server.listen(3400);
//监听连接事件
server.on('connection',function(sockect){

    //往客户端传消息
    
    sockect.write('游戏登录成功');

    //监听客户端发送过来的数据

    sockect.on('data',function(){
        sockect.write('给你包一套神装');
    })
})
