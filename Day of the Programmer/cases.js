const expect = require('../test/expect');
const method = require('.');
const assert = require('assert');

const testMethod = (input, output) => {
  return assert.equal(output, method(...input));
};

module.exports = () => {
  expect([
    2017
  ], '13.09.2017', testMethod);
  expect([
    2016
  ], '12.09.2016', testMethod);
  expect([
    1800
  ], '12.09.1800', testMethod);
  expect([
    1918
  ], '26.09.1918', testMethod);
};