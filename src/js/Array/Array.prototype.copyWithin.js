/**
 * @name: Array.prototype.copyWithin
 * @description: 浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。
 * @author: lizijie(lizijie@yy.com)
 * @update: 2017-05-04
 */

Array.prototype.copyWithin = function(target, start = 0, end = this.length) {
	let arr = this;
	let len = end - start;
	let isArray = Array.isArray(arr);
	start < 0 && (start += this.length);
	end < 0 && (end += this.length);
	for(let i = target;i < len;i++){
		if(isArray || arr[i] != void 0){
			arr[i] = arr[start];
		}
		start ++;
	}
	return arr;
}