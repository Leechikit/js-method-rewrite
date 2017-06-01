/**
 * @name: Function.prototype.apply
 * @description: 在指定 this 值和参数（参数以数组或类数组对象的形式存在）的情况下调用某个函数。
 * @author: lizijie
 * @update: 2017-05-30
 */

Function.prototype.apply = function(thisArg, argsArray) {
	let context = thisArg || window;
	let result;
	context = Object(context);
	context.fn = this;
	if (argsArray && argsArray.length > 0) {
		let arr = [];
		for (let i = 0, len = argsArray.length; i < len; i++) {
			arr.push('argsArray[' + i + ']');
		}
		result = eval("context.fn(" + arr + ")");
	} else {
		result = context.fn();
	}
	delete context.fn;
	return result;
}