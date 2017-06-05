/**
 * @name: Array.prototype.unshift
 * @description: 将一个或多个元素添加到数组的开头，并返回新数组的长度。
 * @author: lizijie
 * @update: 2017-06-05
 */

Array.prototype.unshift = function(...args) {
	let lastIndex = this.length - 1;
	let arr = Array.prototype.slice.call(this);
	for (let i = 0, len = args.length; i < len; i++) {
		this[i] = args[i];
	}
	for (let i = 0, len = arr.length; i < len; i++) {
		this[++lastIndex] = arr[i];
	}
	return lastIndex + 1;
}