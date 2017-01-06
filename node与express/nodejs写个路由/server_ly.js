var http = require("http");
http.createServer(function(req,res){
	console.log(req.url);
	var path = req.url.replace(/\/?(?:\?.*)?$/,"").toLowerCase();
	console.log(path);
	switch (path) {
		case "":
			res.writeHead(200,{"Content-Type":"text/plain"});
			res.end("Home Page");
			break;
		case "/ablout":
			res.writeHead(200,{"Content-Type":"text/plain"});
			res.end("Ablout");
			break;
		default:
			res.writeHead(404,{"Content-Type":"text/plain"});
			res.end("No Find");
			break;
	}
}).listen(3000);
console.log("搭建路由成功...地址3000");