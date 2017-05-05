/**
 * @name: Array.of
 * @description: 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
 * @author: lizijie(lizijie@yy.com)
 * @update: 2017-05-04
 */

Array.of = function() {
	return Array.prototype.slice.call(arguments);
}