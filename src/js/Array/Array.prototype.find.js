/**
 * @name: Array.prototype.find
 * @description: 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
 * @author: lizijie
 * @update: 2017-05-04
 */

Array.prototype.find = function(callback, thisArg) {
	let cb = typeof callback == 'function' ? callback : function() {};
	let arr = this;
	let result;
	for (let i = 0, len = arr.length; i < len; i++) {
		if (cb.call(thisArg, arr[i], i, arr)) {
			result = arr[i];
			break;
		}
	}
	return result;
}