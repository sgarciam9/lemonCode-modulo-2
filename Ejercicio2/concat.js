var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var concat = function (a, b) { return __spreadArray(__spreadArray([], a, true), b, true); };
// OPCIONAL
var concatMultiple = function () {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return arrays.reduce(function (acc, array) { return __spreadArray(__spreadArray([], acc, true), array, true); }, []);
};
// PRUEBAS
var array1 = [1, 2];
var array2 = [3, 4];
console.log('concat:', concat(array1, array2));
console.log('concatMultiple:', concatMultiple([1], [2, 3], [4]));
