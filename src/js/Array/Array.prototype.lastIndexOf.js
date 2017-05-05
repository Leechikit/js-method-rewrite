/**
 * @name: Array.prototype.lastIndexOf
 * @description: 返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
 * @author: lizijie
 * @update: 2017-05-05
 */

Array.prototype.lastIndexOf = function(searchElement, fromIndex = this.length - 1) {
	let arr = this;
	let result = -1;
	let start = fromIndex < 0 ? fromIndex + arr.length : fromIndex;
	for (let i = start; i >= 0; i--) {
		if (arr[i] === searchElement) {
			result = i;
			break;
		}
	}
	return result;
}