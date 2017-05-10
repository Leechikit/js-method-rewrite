/**
 * @name: Array.prototype.join
 * @description: 将数组（或一个类数组对象）的所有元素连接到一个字符串中。
 * @author: lizijie(lizijie@yy.com)
 * @update: 2017-05-10
 */

Array.prototype.join = function(separator = ',') {
	let result = '';
	for (let i = 0, len = this.length; i < len; i++) {
		if (i === 0) {
			result += this[i];
		} else {
			result += separator + this[i];
		}
	}
	return result;
}