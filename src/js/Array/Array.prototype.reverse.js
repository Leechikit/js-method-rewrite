/**
 * @name: Array.prototype.reverse
 * @description: 颠倒数组中元素的位置。第一个元素会成为最后一个，最后一个会成为第一个
 * @author: lizijie
 * @update: 2017-05-04
 */

Array.prototype.reverse = function() {
	let newArr = Array.prototype.slice.call(this);
	let arr = this;
	let len = newArr.length;
	for (let i = 0; i < len; i++) {
		arr[i] = newArr[len - 1 - i];
	}
}