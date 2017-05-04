/**
 * @name: Array.prototype.forEach
 * @description: 对数组的每个元素执行一次提供的函数。
 * @author: lizijie(lizijie@yy.com)
 * @update: 2017-05-03
 */

Array.prototype.forEach = function(callback, thisArg) {
	let cb = typeof callback == 'function' ? callback : function() {};
	for (let i = 0, len = this.length; i < len; i++) {
		cb.call(thisArg, this[i], i, this);
	}
}