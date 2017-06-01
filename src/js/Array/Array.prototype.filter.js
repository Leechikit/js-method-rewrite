/**
 * @name: Array.prototype.filter
 * @description: 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
 * @author: lizijie
 * @update: 2017-06-01
 */

Array.prototype.filter = function(iteratee, thisArg) {
	if (typeof iteratee !== "function") {
		throw new TypeError(iteratee + ' is not a function')
	}
	let arr = [];
	for (let i = 0, len = this.length; i < len; i++) {
		if (iteratee.call(thisArg, this[i], i, this) === true) {
			arr.push(this[i]);
		}
	}
	return arr;
}