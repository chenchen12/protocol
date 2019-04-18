const WebSocket =require('ws');
const WebSocketServer =WebSocket.Server;
//开启服务

const wss = new WebSocketServer({
    port:3000
});

//监听连接事件
wss.on('connection',function(ws){
   //往客户端推送消息
   ws.send('heihei ,you connect me');
   setTimeout(function(){
        ws.send('hello,sariy');
   },2000);

    //监听客户端推送的消息
    ws.on('message',(mes)=>{
        console.log('get message');
        ws.send('I rescive')
    })
})
