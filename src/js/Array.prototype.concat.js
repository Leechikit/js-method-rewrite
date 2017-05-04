/**
 * @name: Array.prototype.concat
 * @description: 合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
 * @author: lizijie(lizijie@yy.com)
 * @update: 2017-05-04
 */

Array.prototype.concat = function() {
	let newArr = Array.prototype.slice.call(this);
	let args = Array.prototype.slice.call(arguments);
	for(let i = 0, len = args.length; i < len; i++){
		if(Array.isArray(args[i])){
			for(let j = 0, len = args[i].length; j < len; j++){
				newArr.push(args[i][j]);
			}
		}else{
			newArr.push(args[i]);
		}
	}

	return newArr;
}