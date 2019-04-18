var net =require('net');
var client =net.Socket();
//连接tcp服务器
client.connect(3400,'127.0.0.1',function(){
    setTimeout(function(){
        //客户端向服务器发送信息
        client.write('i kill a bosss');
    },2000);
});
client.on('data',function(data){
    console.log(data.toString());
})