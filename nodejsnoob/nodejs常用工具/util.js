var util = require("util");
function Person(){
	this.name = "xiaocheng";
	this.age = 23;
	this.sayHello = function (){
		console.log("hello " + this.name);
	}
}
Person.prototype.showName = function (){
	console.log(this.name);
}
function Sub(){
	this.name = "sub";
}
util.inherits(Sub,Person);
var person = new Person();
person.showName();
person.sayHello();
console.log(person);
var sub = new Sub();
sub.showName();
console.log(sub);