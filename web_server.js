const http = require('http');
url =  require('url');
const fs = require('fs');
var email;
const server = http.createServer(function(req,res)
{
    const query = url.parse(req.url,true).query;
    res.write("<html><head><title>BasicServer</title></head><body><p>Hello World!</p></body></html>");
    res.end();
    fs.appendFile('EmailId.text',JSON.stringify(query));
    //res.write("<html><head><title>BasicServer</title></head><body><p>Hello World!</p></body></html>")
    //res.end();
});

/*http.createServer(app), function() {
    console.log('Express server listening');
});

app.get('/a:',function(req,res) 
{
    //email = req.params.a;
    res.write("Email Id is : " + req.params.a );
});*/

//fs.appendFile('EmailId.text',email);

server.listen(5000);
console.log("Server is listening");
