var fruitsArr = ["苹果","香蕉","橙子","梨","橘子","哈密瓜","桃子","蹄子"];
exports.getFruit = function () {
	return fruitsArr[Math.floor(Math.random()*fruitsArr.length)];
}