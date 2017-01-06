var parse1 = require("./module.js")
var fs = require("fs");
fs.readFile("log.txt",function(err,data){
	if (err) {
		return console.error(err);
	}
	parse1 = new parse1();
	console.log(parse1.parse(data));
})