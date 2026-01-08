const head = <T>([first]: T[]): T | undefined => first;

const tail = <T>([, ...rest]: T[]): T[] => rest;

const init = <T>(array: T[]): T[] => array.slice(0, -1);

const last = <T>(array: T[]): T | undefined =>
  array[array.length - 1];

// PRUEBAS
const array = [1, 2, 3, 4];

console.log('head:', head(array));
console.log('tail:', tail(array));
console.log('init:', init(array));
console.log('last:', last(array));
