// 创建目录 fs.mkdir(path,callback)
var fs = require("fs");
console.log("创建目录test/");
fs.mkdir("/tmp/",function (err){
	if (err) {
		return console.error(err);
	}
	console.log("目录创建成功");
})