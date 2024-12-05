var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('real.pdf', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/pdf'});
    res.write(data);
    return res.end();
  });
}).listen(8082);