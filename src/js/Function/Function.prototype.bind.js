/**
 * @name: Function.prototype.bind
 * @description: 创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。
 * @author: lizijie
 * @update: 2017-05-31
 */

Function.prototype.bind = function(thisArg) {
	let arr = [];
	let _this = this;
	for (let i = 1, len = arguments.length; i < len; i++) {
		arr.push(arguments[i]);
	}
	let F = function() {};
	F.prototype = this.prototype;
	let bound = function() {
		let innerArgs = Array.prototype.slice.call(arguments);
		let finalArgs = arr.concat(innerArgs);
		// let context = thisArg || window;
		// context.fn = _this;
		// let result = eval("context.fn(" + finnalArgs + ")");
		// delete context.fn;
		// return result;
		return _this.apply(this instanceof F ? this : thisArg || this, finalArgs);
	}
	bound.prototype = new F();
	return bound;
}