/**
 * @name: Array.prototype.indexOf
 * @description: 返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回-1。
 * @author: lizijie
 * @update: 2017-05-05
 */

Array.prototype.indexOf = function(searchElement, fromIndex = 0) {
	let arr = this;
	let result = -1;
	let start = fromIndex < 0 ? fromIndex + arr.length : fromIndex;
	for (let i = start, len = arr.length; i < len; i++) {
		if (arr[i] === searchElement) {
			result = i;
			break;
		}
	}
	return result;
}