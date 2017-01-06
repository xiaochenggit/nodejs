// 删除目录fs.rmdir(path,callback)
var fs = require("fs");
console.log("准备删除目录tmp");
fs.rmdir("/tmp",function(err){
	if (err) {
		return console.error(err);
	}
	console.log("读取TMP目录")
	fs.readdir("/github/",function(err,files){
		if (err) {
			return console.error(err)
		}
		files.forEach(function(file){
			console.log(file);
		})
	})
})