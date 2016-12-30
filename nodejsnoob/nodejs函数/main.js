function say(name){
	console.log("hello " + name);
}
function execute(someFunction , value){
	someFunction(value);
}
execute(function(name){
	console.log("你好"+name);
},"xiaocheng");