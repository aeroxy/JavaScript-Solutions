const expect = require('../test/expect');
const method = require('.');
const assert = require('assert');

const testMethod = (input, output) => {
  return assert.equal(output, method(...input));
};

module.exports = () => {
  expect([
    8,
    'UDDDUDUU'
  ], 1, testMethod);
};