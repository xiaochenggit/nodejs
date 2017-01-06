var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var multer = require("multer");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:"/tmp/"}).array('image'));
app.get("/index2.html",function(req,res){
	res.sendFile(__dirname + "/" + "index2.html");
})
app.post("/file_upload",function(req,res){
	console.log(req.files[0]);// 上传文件的信息
	var des_file = _dirname + "/" + req.files[0].orginalname;
	fs.readFile(req.files[0].path,function(err){
		if (err) {
			console.log(err);
		}else{
			response = {
				message : "File uploaded sucessfully",
				filename : req.files[0].orginalname
			}
		}
		console.log(response);
		res.end(JSON.stringify(response));
	})
})
var server = app.listen(8082,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例,访问地址...",host,port);
})