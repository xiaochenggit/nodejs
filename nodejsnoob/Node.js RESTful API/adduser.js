var express = require("express");
var app = express();
var fs = require("fs");
// 添加的新用户数据
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   },
   "user5" : {
      "name" : "xiaocheng",
      "password" : "password5",
      "profession" : "teacher",
      "id": 5
   }
}
app.get("/adduser",function(req,res){
	// 读取已存在的数据
	fs.readFile(__dirname + "/" + "users.json","utf8",function(err,data){
		data = JSON.parse(data);
		for (var key in user) {
			data[key] = user[key];
		}
		console.log(data);
		res.end(JSON.stringify(data));
	})
})
var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例,访问地址为...",host,port);
})