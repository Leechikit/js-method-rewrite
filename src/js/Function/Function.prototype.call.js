/**
 * @name: Function.prototype.call
 * @description: 在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法。
 * @author: lizijie
 * @update: 2017-05-31
 */

Function.prototype.call = function(thisArg) {
	let context = thisArg || window;
	let arr = [];
	let result;
	context = Object(context);
	context.fn = this;
	for (let i = 1, len = arguments.length; i < len; i++) {
		arr.push('arguments[' + i + ']');
	}
	result = eval("context.fn(" + arr + ")");
	delete context.fn;
	return result;
}