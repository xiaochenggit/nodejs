var http = require("http"),fs = require("fs");
function serverStatic(res,path,contentType,responseCode){
	if (!responseCode) {
		responseCode = 200;
	}
	fs.readFile(__dirname + path,function(err,data){
		if (err) {
			console.log(err);
			res.writeHead(500,{"Content-Type":"text/plain"});
			res.end("500---no find");
		}else{
			res.writeHead(responseCode,{"Content-Type":contentType});
			res.end(data)
		}
	})
}
http.createServer(function(req,res){
	var path = req.url.replace(/\/?(?:\?.*)?$/,"").toLowerCase();
	switch (path) {
		case "":
			serverStatic(res,"/public/home.html","text/html");
			break;
		case "/ablout":
			serverStatic(res,"/public/ablout.html","text/html");
			break;
		case "/img/logo":
			serverStatic(res,"/public/img/logo.jpg","image/jpg");
			break;
		default:
			serverStatic(res,"/public/404.html","text/html");
			break;
	}
}).listen("3000");
console.log("成功创建路由,地址是3000");