/* eslint-disable */

// A variable is a named memory location that can hold a value. Variables can
// be used to store a wide range of data types, such as numbers, strings, and
// arrays. A variable is declared by specifying its name, data type, and
// optionally an initial value. Once a variable is declared, it can be read
// potentially updated in other parts of the program.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations

const courseName = 'typeScript';

const toothFairy = 2.0;

let teeth = 32;
{
  let teeth = 29;
  console.log('teeth in function: '+teeth);
}
console.log('teeth outside function: '+teeth);

// let can be initialized without a value and then assigned later
// const must be initialized with a value and cannot be reassigned
