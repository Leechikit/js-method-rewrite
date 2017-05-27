/**
 * @name: Function.prototype.apply
 * @description: 	在指定 this 值和参数（参数以数组或类数组对象的形式存在）的情况下调用某个函数。
 * @author: lizijie
 * @update: 2017-05-27
 */

Function.prototype.apply = function(thisArg[, argsArray]) {
    thisArg.fn = this;
    thisArg.fn(argsArray);
    delete thisArg.fn;
}