const concat = <T>(a: T[], b: T[]): T[] => [...a, ...b];

// OPCIONAL
const concatMultiple = <T>(...arrays: T[][]): T[] =>
  arrays.reduce((acc, array) => [...acc, ...array], []);

// PRUEBAS
const array1 = [1, 2];
const array2 = [3, 4];

console.log('concat:', concat(array1, array2));
console.log(
  'concatMultiple:',
  concatMultiple([1], [2, 3], [4])
);
