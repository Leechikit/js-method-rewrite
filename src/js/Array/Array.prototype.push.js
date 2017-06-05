/**
 * @name: Array.prototype.push
 * @description: 创建一个新数组，其结果是该数组中的每个元素调用一个提供的函数。
 * @author: lizijie
 * @update: 2017-06-05
 */

Array.prototype.push = function(...args) {
	let lastIndex = this.length - 1;
	for(let i of args){
		this[++lastIndex] = i;
	}
}