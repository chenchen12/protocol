//https服务，需要一个证书（一般都是收费，也可以自定义）
//$ openssl genrsa 1024>./private.pem
//openssl req -new -key ./private.pem -out ./csr.pem
//openssl x509 -req -days 365 -in csr.pem -signkey private.pem -out ./file.crt

const https =require('https');
const fs =require('fs');
const option ={
    key :fs.readFileSync('./private.pem'),
    cert:fs.readFileSync('./file.crt')
}
https.createServer(option,function(req,res){
        res.writeHead(200);
        res.sendDate('hello,https');
}).listen(3500);

