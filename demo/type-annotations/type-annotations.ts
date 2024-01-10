/* eslint-disable */
import { strict as assert } from "assert";

// Type annotations are used to provide type information for variables,
// functions, and other data structures in a program. By adding type
// annotations, you can specify the expected types of data and prevent errors
// that could occur from using the wrong type. This allows for better code
// reliability, maintainability, and readability.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables

const hoursWorked: number = 22;
const totalOT: number = 1.5;
const holiday: boolean = false;

// Type annotations can be added to function parameters to specify the types
// of data that the function expects to receive.
// The return type of the function can also be specified.
function calculatePay(hoursWorked: number, totalOT: number, holiday: boolean): number {
  let pay: number = 0;
  if (holiday) {
    pay = hoursWorked * 2;
  } else {
    pay = hoursWorked * totalOT;
  }
  return pay;
}