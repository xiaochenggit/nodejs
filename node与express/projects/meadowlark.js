var express = require("express");
var app = express();
var getFruits = require("./lib/getFruits.js");
// 设置 handlebars 视图引擎
var handlebars = require("express3-handlebars").create({defaultLayout:"main"});
app.engine("handlebars",handlebars.engine);
app.set("view engine","handlebars");

app.set("port",process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));

// 定制404 界面
app.get("/",function(req,res){
    // res.type("text/plain");
    // res.send("MeadowLark Home Page");
    res.render("home");
})

// 创建一个水果数组
app.get("/about",function(req,res){
	// res.type("text/plain");
	// res.send("Ablout MeadowLark Page");
	res.render("about",{fruits:getFruits.getFruit()});
})

app.use(function(req,res){
	// res.type("text/plain");
	// res.status(404);
	// res.send("404 - no find");
	res.status(404);
	res.render("404")
})

app.use(function(err,req,res,next){
	console.error(err.stack);
	// res.type("text/plain");
	res.status(500);
	// res.send("500 Server Error");
	res.render(500)
})

app.listen(app.get("port"),function(){
	console.log("Express started on http//localhost:"+app.get('port')+"; press Ctrl-C to terminate");
})
