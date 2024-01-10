/* eslint-disable */
import { strict as assert } from "assert";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

/***** Infinity and NAN *****/
  const inf = 69 / 0;
  assert.equal(inf, Infinity);
  // using Infinity keyword in checking
  assert.equal(inf === Infinity, true);

  const negInf = -69 / 0;
  assert.equal(negInf, -Infinity);

  const nan = 0 / 0;
  assert.equal(nan, NaN);
  // using NaN keyword in checking


/***** Remainder *****/
  const rmdr = 10 % 3;
  assert.equal(rmdr, 1);


/***** Exponentiation *****/
  const exp = 2 ** 3;
  assert.equal(exp, 8);


/***** Math Object *****/
  // Math.abs()
  const abs = Math.abs(-69);
  assert.equal(abs, 69);

  // Math.ceil()
  const ceil = Math.ceil(69.69);
  assert.equal(ceil, 70);

  // Math.floor()
  const floor = Math.floor(69.69);
  assert.equal(floor, 69);

  // Math.max()
  const max = Math.max(1, 2, 3, 4, 5);
  assert.equal(max, 5);

  // PI
  const pi = Math.PI;
