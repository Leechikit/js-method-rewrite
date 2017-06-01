/**
 * @name: Array.prototype.some
 * @description: 测试数组中的某些元素是否通过了指定函数的测试。
 * @author: lizijie
 * @update: 2017-06-01
 */

Array.prototype.some = function(iteratee, thisArg) {
	if (typeof iteratee !== "function") {
		throw new TypeError(iteratee + 'is not a function');
	}
	let result = false;
	for (let i = 0, len = this.length; i < len; i++) {
		if (iteratee.call(thisArg, this[i], i, this) === true) {
			result = true;
			break;
		}
	}
	return result;
}