const http =require('http');
const fs =require('fs');
http.createServer(function(req,res){
    fs.readFile('./httptest.pptx',function(err,data){
        res.writeHead(200,{'Content-Type':'text/css'})
        res.end(data);
    })
    
}).listen(4000);
