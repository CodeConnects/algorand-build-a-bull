/* eslint-disable */
import { strict as assert } from "assert";

// Objects are a fundamental data type used to represent a collection of
// properties with their respective values. They are defined using either an
// object literal notation or a constructor notation.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html

type Coordinate = {
  x: number;
  y: number;
};  // Type alias

const startingPoint: Coordinate = { x: 0, y: 0 };
const endPoint: Coordinate = { x: 10, y: 10 };

const newX = endPoint.x - startingPoint.x;
