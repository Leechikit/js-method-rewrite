/**
 * @name: Array.prototype.fill
 * @description: 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。
 * @author: lizijie
 * @update: 2017-05-05
 */

Array.prototype.fill = function(value, start = 0, end = this.length) {
	let arr = Array.prototype.slice.call(this);
	start < 0 && (start += this.length);
	end < 0 && (end += this.length);
	end > this.length && (end = this.length);
	for (let i = start; i < end; i++) {
		arr[i] = value;
	}
	return arr;
}