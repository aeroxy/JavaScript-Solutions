const expect = require('../test/expect');
const method = require('.');
const assert = require('assert');

function processResult(result) {
  return JSON.stringify(
    result.map(
      (array) => JSON.stringify(
        array.sort()
      )
    ).sort()
  );
}

function testMethod (input, output) {
  const result = method(...input);
  return assert.equal( 
    processResult(output),
    processResult(result),
  );
};

module.exports = {
  testCases: [
    () => {
      expect([
        [0, -1, 2, -3, 1],
        -2,
      ], [
        [0, -3, 1],
        [-1, 2, -3],
      ], testMethod);
    },
    () => {
      expect([
        [10, 4, 2, 3, 5],
        15,
      ], [
        [10, 2, 3],
      ], testMethod);
    },
    () => {
      expect([
        [0, 0, 0, 0],
        0,
      ], [
        [0, 0, 0],
      ], testMethod);
    },
    () => {
      expect([
        [1, 1, 1, 0],
        2,
      ], [
        [1, 1, 0],
      ], testMethod);
    },
    () => {
      expect([
        [1, 0],
        1,
      ], [], testMethod);
    },
  ],
};