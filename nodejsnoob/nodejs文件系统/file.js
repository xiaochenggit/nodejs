var fs = require("fs");
// 异步打开文件
console.log("准备打开文件");
fs.open("input.txt","r+",function (err,fd){
	if (err) {
		return console.error(err);
	}else{
		console.log(fd);
		console.log("打开文件成功");
	}
})