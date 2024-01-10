/* eslint-disable */
import { strict as assert } from "assert";

const coding = true;
const reading = !coding;

const age = 18;
const isTeen = age >= 13 && age < 20;
assert.equal(isTeen, true);

const pckWeight = 10;
const pckLength = 20;
const pckWidth = 30;
const feeExempt = false;

const additionalFee = !feeExempt && (pckWeight > 10 || pckLength > 50 || pckWidth > 30);
assert.equal(additionalFee, true);
