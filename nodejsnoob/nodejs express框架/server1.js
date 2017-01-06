var express = require("express");
var app = express();
var bodyParser = require("body-parser");
// 创建 application/x-www-form-urlencoded 编码分析
var urlencodeParser = bodyParser.urlencoded({extended:false});
app.use(express.static("public"));
console.log("a");
app.get("/index1.html",function(req,res){
	res.sendFile(__dirname + "/" + "index1.html");
})
app.post("/process_post",urlencodeParser,function(req,res){
	// 输出josn格式
	response = {
		first_name : req.body.first_name,
		last_name : req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})
var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例,访问地址为 ...",host,port);
})