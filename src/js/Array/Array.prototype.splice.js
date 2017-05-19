/**
 * @name: Array.prototype.splice
 * @description: 通过删除现有元素和/或添加新元素来更改数组的内容。
 * @author: lizijie
 * @update: 2017-05-15
 */

Array.prototype.splice = function(start, deleteCount, ...args) {
	let result = [];
	let arr = [];
	let count = deleteCount > (this.length - start) ? (this.length - start) : deleteCount;
	let length = this.length - count + args.length;
	let arr1 = Array.prototype.slice.call(this, 0, start);
	let arr2 = Array.prototype.slice.call(this, start, start + deleteCount);
	let arr3 = Array.prototype.slice.call(this, start + deleteCount);
	result = arr2;
	arr = arr1.concat(args, arr3);
	for (let i = 0, len = arr.length; i < len; i++) {
		this[i] = arr[i];
	}
	this.length = length;
	return result;
}