// 输出终端
process.stdout.write("Hello World" + "\n");
// 通过参数读取
process.argv.forEach(function (val,index,array){
	console.log(index + " : " + val);
});
// 获取执行路局
console.log("执行路局 : " + process.execPath);
// 平台信息
console.log("平台信息 : " + process.platform);