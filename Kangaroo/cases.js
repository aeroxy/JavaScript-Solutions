const expect = require('../test/expect');
const method = require('./kangaroo');
const assert = require('assert');

const testMethod = (input, output) => {
  return assert.equal(method(...input), output);
};

module.exports = () => {
  expect([0, 3, 4, 2], 'YES', testMethod);
  expect([43, 2, 70, 2], 'NO', testMethod);
};