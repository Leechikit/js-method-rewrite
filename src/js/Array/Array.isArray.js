/**
 * @name: Array.isArray
 * @description: 确定传递的值是否为Array
 * @author: lizijie
 * @update: 2017-05-04
 */

Array.isArray = function(arg){
	return Object.prototype.toString.call(arg) === "[object Array]";
}