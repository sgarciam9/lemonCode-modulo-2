// ===== CLONE =====
function clone<T extends object>(source: T): T {
  return { ...source };
}

// ===== MERGE =====
function merge<T extends object, U extends object>(
  source: T,
  target: U
): T & U {
  return {
    ...target,
    ...source
  };
}

// ================= PRUEBAS =================

// --- Clone ---
const original = { name: 'María', age: 30 };
const cloned = clone(original);

console.log('--- RESULTADO CLONE ---');
console.log('Objeto original:', original);
console.log('Objeto clonado:', cloned);
console.log('¿Misma referencia?', original === cloned);

// --- Merge ---
const a = { name: 'María', surname: 'Ibáñez', country: 'SPA' };
const b = { name: 'Luisa', age: 31, married: true };

const merged = merge(a, b);

console.log('--- RESULTADO MERGE ---');
console.log('Objeto source:', a);
console.log('Objeto target:', b);
console.log('Objeto resultante:', merged);
