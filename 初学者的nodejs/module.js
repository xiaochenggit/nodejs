var Parse = function(){

}
Parse.prototype.parse = function(data){
	var result = {};
	var text = data.toString().split("\n");
	for( var i = 0 ,len = text.length ; i < len; i++ ){
		var part = text[i].split(" ");
		if (!result[part[1]]) {
			result[part[1]] = 0;
		}
		result[part[1]] += parseInt(part[2])
	}
	return result;
}
module.exports = Parse;