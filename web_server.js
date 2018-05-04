const http = require("http");
const express = require("express");
const app = express();
const fs = require("fs");
var email;
const server = http.createServer(function(req,res)
{
    res.write("<html><head><title>BasicServer</title></head><body><p>Hello World!</p></body></html>")
    res.end();
});

app.get('/',function(req,res) 
{
    fs.appendFile('EmailId.text',req.params);
)};

server.listen(5000);
console.log("Server is listening");
