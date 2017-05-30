/**
 * @name: Function.prototype.apply
 * @description: 	在指定 this 值和参数（参数以数组或类数组对象的形式存在）的情况下调用某个函数。
 * @author: lizijie
 * @update: 2017-05-30
 */

Function.prototype.apply = function(thisArg, argsArray) {
	let arr = [];
	if (argsArray) {
		for (let i = 0, len = argsArray.length; i < len; i++) {
			arr.push('argsArray[' + i + ']');
		}
	}
	thisArg.fn = this;
	eval("thisArg.fn(" + arr + ")");
	delete thisArg.fn;
}