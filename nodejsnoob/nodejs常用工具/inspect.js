var util = require("util");
function Person(){
	this.name = "xiaocheng";
	this.age = 23;
	this.sayHello = function (){
		console.log("Hello " + this.name);
	}
}
var person = new Person();
console.log(util.inspect(person));
console.log(util.inspect(person,true));

// util.isArray(object)
// 如果给定的参数 "object" 是一个数组返回true，否则返回false。

// util.isRegExp(object)
// 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。

// util.isDate(object)
// 如果给定的参数 "object" 是一个日期返回true，否则返回false。

// util.isError(object)
// 如果给定的参数 "object" 是一个错误对象返回true，否则返回false。