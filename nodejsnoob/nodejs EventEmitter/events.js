// 引入events模块
var EventEmitter = require("events").EventEmitter;
// 创建eventEmitter 对象
var event = new EventEmitter();
event.on("some_event",function (){
	console.log("some_event事件触发");
})
setTimeout(function (){
	event.emit("some_event");
}, 1000);