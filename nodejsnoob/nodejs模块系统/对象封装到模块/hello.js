// 对象封装到模块中 
function Hello(){
	var name;
	this.setName = function (thname){
		name = thname;
	};
	this.sayName = function (){
		console.log(" hello " + name);
	}
}
module.exports = Hello;