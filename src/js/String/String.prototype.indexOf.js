/**
 * @name: String.prototype.indexOf
 * @description: 返回调用  String 对象中第一次出现的指定值的索引，开始在 fromIndex进行搜索。
 * @author: lizijie
 * @update: 2017-06-20
 */

let indexOf = String.prototype.indexOf = function(searchElement, fromIndex = 0) {
	let str = this;
	let result = -1;
	let strLen = str.length;
	let searchLen = searchElement.length;
	let start = fromIndex < 0 ? 0 : fromIndex
	let needle = 0;
	if (fromIndex <= strLen) {
		while (start <= strLen) {
			if (needle >= searchLen) {
				result = start - needle;
				break;
			}
			if (str[start] != searchElement[needle]) {
				start -= needle;
				needle = -1;
			}
			needle++;
			start++;
		}
	}else{
		result = fromIndex;
	}

	return result;
}

export default indexOf;