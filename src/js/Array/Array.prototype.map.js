/**
 * @name: Array.prototype.map
 * @description: 创建一个新数组，其结果是该数组中的每个元素调用一个提供的函数。
 * @author: lizijie
 * @update: 2017-06-01
 */

Array.prototype.map = function(iteratee, thisArg) {
	if (typeof iteratee !== "function") {
		throw new TypeError(iteratee + ' is not a function')
	}
	let arr = [];
	for (let i = 0, len = this.length; i < len; i++) {
		arr.push(iteratee.call(thisArg, this[i], i, this));
	}
	return arr;
}