/**
 * @name: Array.prototype.includes
 * @description: 用来判断当前数组是否包含某指定的值，如果是，则返回 true，否则返回 false。
 * @author: lizijie
 * @update: 2017-06-01
 */

Array.prototype.includes = function(searchElement, fromIndex = 0) {
	let arr = this;
	let result = false;
	let start = Math.max(fromIndex < 0 ? fromIndex + arr.length : fromIndex, 0);
	for (let i = start, len = arr.length; i < len; i++) {
		if (arr[i] === searchElement) {
			result = true;
			break;
		}
	}
	return result;
}