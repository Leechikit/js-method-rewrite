/**
 * @name: String.prototype.indexOf
 * @description: 返回调用  String 对象中第一次出现的指定值的索引，开始在 fromIndex进行搜索。
 * @author: lizijie
 * @update: 2017-06-20
 */

let indexOf = function(str, searchElement, fromIndex = 0) {
	// let str = this;
	let result = -1;
	let strLen = str.length;
	let searchLen = searchElement.length;
	let start = Math.max(fromIndex < 0 ? fromIndex + strLen : fromIndex, 0);
	let needle = 0;
	// debugger;
	while(start <= strLen){
		if(needle >= searchLen){
			result = start - needle;
			break;
		}
		if(str[start] != searchElement[needle]){
			start -= needle;
			needle = -1;
		}
		needle++;
		start++;
	}
	return result;
}

export default indexOf;