const expect = require('../test/expect');
const method = require('./solution2');
const assert = require('assert');

const testMethod = (input, output) => {
  const result = method(...input);
  const sorterdResult = result.map((array) => {
    array.sort((a, b) => a - b);
    return JSON.stringify(array);
  }).sort((a, b) => a - b);
  return assert.equal(
    JSON.stringify(output.map((array) => JSON.stringify(array))),
    JSON.stringify(sorterdResult),
  );
};

module.exports = {
  testCases: [
    () => {
      expect([
        [1,0,-1,0,-2,2],
        0,
      ], [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]], testMethod);
    },
    () => {
      expect([
        [2,2,2,2,2],
        8,
      ], [[2,2,2,2]], testMethod);
    },
  ],
};