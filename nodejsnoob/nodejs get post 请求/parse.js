var http = require("http");
var url = require("url");
var util = require("util");
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain;charset=utf8"});
	// 解析 url 参数
	var params = url.parse(req.url,true).query;
	res.write("网站名 : " + params.name+"\n");
	res.write("url地址 : " + params.url);
	res.end();
}).listen(3000)