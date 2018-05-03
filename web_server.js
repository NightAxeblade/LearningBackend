const http = require("http");
const server = http.createServer(function(req,resp)
{
    resp.write("<html><head><title>BasicServer</title></head><body><p>Hello World!</p></body></html>")
    resp.end();
});

server.listen(5000);
console.log("Server is listening");
