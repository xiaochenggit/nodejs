// 获取post请求的内容
var http = require("http");
var querystring = require("querystring");
var util = require("util");
http.createServer(function(req,res){
	// 定义一个 post 变量,用于缓存请求体的信息
	var post = "";
	// 通过 req 的 data 事件监听函数,每当接收到请求体的数据,就累加到 post 变量里
	req.on("data",function(chunk){
		post += chunk;
	});

	// 在 end 事件触发后,通过 querystring.parse 将 post 解析为真正的 POST 请求格式,然后向客户端返回。
	req.on("end",function(){
		post = querystring.parse(post);
		res.end(util.inspect(post));
	})
}).listen(3000);
