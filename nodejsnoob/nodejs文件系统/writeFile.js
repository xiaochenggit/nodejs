var fs = require("fs");
console.log("准备写入文件");
fs.writeFile("input.txt","wo shi yige chaoji shuaige ",function (err){
	if (err) {
		return console.error(err);
	}
	console.log("数据写入成功");
	console.log("我是分割线---------------");
	fs.readFile("input.txt",function (err,data){
		if(err){
			return console.error(err);
		}
		console.log("异步读取文件数据 " + data.toString());
	})
})