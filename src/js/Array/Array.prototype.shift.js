/**
 * @name: Array.prototype.shift
 * @description: 从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
 * @author: lizijie
 * @update: 2017-06-05
 */

Array.prototype.shift = function() {
	let lastIndex = this.length - 1;
	let result;
	if (lastIndex >= 0) {
		result = this[0];
		for (let i = 0; i < lastIndex; i++) {
			this[i] = this[i + 1];
		}
		this.length = lastIndex;
	}
	return result;
}