var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// ===== CLONE =====
function clone(source) {
    return __assign({}, source);
}
// ===== MERGE =====
function merge(source, target) {
    return __assign(__assign({}, target), source);
}
// ================= PRUEBAS =================
// --- Clone ---
var original = { name: 'María', age: 30 };
var cloned = clone(original);
console.log('--- RESULTADO CLONE ---');
console.log('Objeto original:', original);
console.log('Objeto clonado:', cloned);
console.log('¿Misma referencia?', original === cloned);
// --- Merge ---
var a = { name: 'María', surname: 'Ibáñez', country: 'SPA' };
var b = { name: 'Luisa', age: 31, married: true };
var merged = merge(a, b);
console.log('--- RESULTADO MERGE ---');
console.log('Objeto source:', a);
console.log('Objeto target:', b);
console.log('Objeto resultante:', merged);
