/**
 * @name: Array.prototype.reduce
 * @description: 对累加器和数组中的每个元素 (从左到右)应用一个函数，将其减少为单个值
 * @author: lizijie
 * @update: 2017-05-04
 */

Array.prototype.reduce = function(iteratee, initialValue) {
	if (typeof iteratee !== "function") {
		throw new TypeError(iteratee + ' is not a function')
	}
	let arr = this;
	let len = arr.length;
	let result;
	let index;
	if (initialValue != void 0) {
		result = initialValue;
		index = 0;
	} else {
		result = arr[0];
		index = 1;
	}

	function loop() {
		if (len > 0) {
			result = iteratee.call(null, result, arr[index]);
			len--
			index++;
			loop();
		}
	}
	loop();
	return result;
}