/**
 * @name: Array.prototype.slice
 * @description: 返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。
 * @author: lizijie
 * @update: 2017-05-13
 */

Array.prototype.slice = function(start, end) {
	let newArr = [];
	let length = this.length;
	let index = 0;
	if(start === void 0 || typeof +start !== 'number' || isNaN(+start)){
		start = 0;
	}else{
		start = + start;
	}
	if(end === void 0 || typeof +end !== 'number' || isNaN(+end) || end > length){
		end = length;
	}else{
		end = + end;
	}
	if(start < 0){
		start = -start > length ? 0 : start + length;
	}
	if(end < 0){
		end = -end > length ? 0 : end + length;
	}
	for (let i = start; i < end; i++) {
		newArr[index] = this[i];
		index++;
	}
	return newArr;
}