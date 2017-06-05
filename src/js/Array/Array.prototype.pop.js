/**
 * @name: Array.prototype.pop
 * @description: 从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
 * @author: lizijie
 * @update: 2017-06-05
 */

Array.prototype.pop = function() {
	let lastIndex = this.length - 1;
	if (lastIndex > 0) {
		this[lastIndex] = null;
		this.length = lastIndex;
	}
}