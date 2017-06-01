/**
 * @name: Array.prototype.reduceRight
 * @description: 接受一个函数作为累加器（accumulator），让每个值（从右到左，亦即从尾到头）缩减为一个值。
 * @author: lizijie
 * @update: 2017-06-01
 */

Array.prototype.reduceRight = function(iteratee, initialValue) {
	if (typeof iteratee !== "function") {
		throw new TypeError(iteratee + ' is not a function')
	}
	let arr = this;
	let result;
	let index;
	if (initialValue != void 0) {
		result = initialValue;
		index = arr.length - 1;
	} else {
		result = arr[arr.length - 1];
		index = arr.length - 2;
	}
	for (let i = index; i >= 0; i--) {
		result = iteratee(result, arr[i]);
	}
	return result;
}