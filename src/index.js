require('./html/index.html');
require('./js/Array/Array.isArray.js');
require('./js/Array/Array.of.js');
require('./js/Array/Array.prototype.slice.js');
require('./js/Array/Array.prototype.forEach.js');
require('./js/Array/Array.prototype.concat.js');
require('./js/Array/Array.prototype.reduce.js');
require('./js/Array/Array.prototype.reverse.js');
// require('./js/Array/Array.prototype.copyWithin.js');
require('./js/Array/Array.prototype.find.js');
require('./js/Array/Array.prototype.findIndex.js');
let arr = [1,2,3];
console.time('forEach');
for(var i = 0;i<100;i++){
	arr.forEach(function(item){
			item = 4;
	})
}
console.timeEnd('forEach');
console.log(arr);

[1, 2, 3, 4, 5].copyWithin(0, 3)