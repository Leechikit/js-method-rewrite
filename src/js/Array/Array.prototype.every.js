/**
 * @name: Array.prototype.every
 * @description: 测试数组的所有元素是否都通过了指定函数的测试。
 * @author: lizijie
 * @update: 2015-05-10
 */

Array.prototype.every = function(iteratee, thisArg) {
	if (typeof iteratee !== "function") {
		throw new TypeError(iteratee + ' is not a function')
	}
	let result = true;
	for (let i = 0, len = this.length; i < len; i++) {
		if (iteratee.call(thisArg, this[i], i.this) === false) {
			result = false;
			break;
		}
	}
	return result;
}