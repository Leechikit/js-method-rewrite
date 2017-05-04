/**
 * @name: Array.prototype.slice
 * @description: 返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。
 * @author: lizijie(lizijie@yy.com)
 * @update: 2017-05-03
 */

Array.prototype.slice = function(start = 0, end = this.length) {
	let newArr = [];
	start < 0 && (start += this.length);
	end < 0 && (end += this.length);
	end > this.length && (end = this.length);
	for (let i = start; i < end; i++) {
		newArr.push(this[i]);
	}
	return newArr;
}