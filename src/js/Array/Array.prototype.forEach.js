/**
 * @name: Array.prototype.forEach
 * @description: 对数组的每个元素执行一次提供的函数。
 * @author: lizijie
 * @update: 2017-05-05
 */

Array.prototype.forEach = function(iteratee, context) {
	if (typeof iteratee !== "function") {
		throw new TypeError(iteratee + ' is not a function')
	}
	for (let i = 0, len = this.length; i < len; i++) {
		if(iteratee.call(context, this[i], i, this) === false){
			break;
		}
	}
}