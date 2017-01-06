// 读取目录 fs.readdir(path,callbak)

var fs = require("fs");
console.log("查看");
fs.readdir("/github/nodejs/nodejsnoob/",function(err,files){
	if (err) {
		return console.error(err);
	}
	files.forEach(function(file){
		console.log(file);
	})
})