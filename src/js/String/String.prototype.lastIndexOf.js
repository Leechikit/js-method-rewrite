/**
 * @name: String.prototype.lastIndexOf
 * @description: 返回指定值在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。从该字符串的后面向前查找，从 fromIndex 处开始。
 * @author: lizijie
 * @update: 2017-06-21
 */

let lastIndexOf = String.prototype.lastIndexOf = function(searchElement, fromIndex = this.length) {
	let str = this;
	let result = -1;
	let strLen = str.length;
	let searchLen = searchElement.length;
	let start = fromIndex < 0 ? 0 : fromIndex - searchLen;
	let needle = 0;
	if (fromIndex <= strLen) {
		while (start >= 0) {
			if (needle >= searchLen) {
				result = start - needle;
				break;
			}
			if (str[start] != searchElement[needle]) {
				start -= 2;
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

export default lastIndexOf;