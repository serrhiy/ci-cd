'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { sum, min, mul, div } = require('../src/math.js');

test('Test math primitives', async (t) => {
  await t.test('Test sum', () => {
    assert.equal(sum(1, 2), 3);
    assert.equal(sum(0, 2), 2);
    assert.equal(sum(0, 0), 0);
    assert.equal(sum(Infinity, 0), Infinity);
    assert.equal(sum(Infinity, Infinity), Infinity);
  });

  await t.test('Test min', () => {
    assert.equal(min(1, 2), -1);
    assert.equal(min(0, 2), -2);
    assert.equal(min(10, 0), 10);
    assert.equal(min(Infinity, 0), Infinity);
    assert.equal(min(Infinity, Infinity), NaN);
  });

  await t.test('Test mul', () => {
    assert.equal(mul(1, 2), 2);
    assert.equal(mul(0, 2), 0);
    assert.equal(mul(0, 0), 0);
    assert.equal(mul(Infinity, 0), NaN);
    assert.equal(mul(Infinity, Infinity), Infinity);
  });

  await t.test('Test div', () => {
    assert.equal(div(2, 1), 2);
    assert.equal(div(0, 2), 0);
    assert.equal(div(2, 0), Infinity);
    assert.equal(div(0, 0), NaN);
    assert.equal(div(Infinity, 0), Infinity);
    assert.equal(div(Infinity, Infinity), NaN);
  });
});
