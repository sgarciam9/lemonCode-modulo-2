var head = function (_a) {
    var first = _a[0];
    return first;
};
var tail = function (_a) {
    var rest = _a.slice(1);
    return rest;
};
var init = function (array) { return array.slice(0, -1); };
var last = function (array) {
    return array[array.length - 1];
};
// PRUEBAS
var array = [1, 2, 3, 4];
console.log('head:', head(array));
console.log('tail:', tail(array));
console.log('init:', init(array));
console.log('last:', last(array));
