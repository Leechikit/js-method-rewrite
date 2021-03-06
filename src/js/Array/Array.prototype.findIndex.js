/**
 * @name: Array.prototype.findIndex
 * @description: 返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
 * @author: lizijie
 * @update: 2017-05-04
 */

Array.prototype.findIndex = function(iteratee, thisArg) {
	if (typeof iteratee !== "function") {
		throw new TypeError(iteratee + ' is not a function')
	}
	let arr = this;
	let result = -1;
	for (let i = 0, len = arr.length; i < len; i++) {
		if (iteratee.call(thisArg, arr[i], i, arr)) {
			result = i;
			break;
		}
	}
	return result;
}