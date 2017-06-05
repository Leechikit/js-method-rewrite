/**
 * @name: Array.prototype.push
 * @description: 将一个或多个元素添加到数组的末尾，并返回数组的新长度。
 * @author: lizijie
 * @update: 2017-06-05
 */

Array.prototype.push = function(...args) {
	let lastIndex = this.length - 1;
	for (let i of args) {
		this[++lastIndex] = i;
	}
	return lastIndex + 1;
}