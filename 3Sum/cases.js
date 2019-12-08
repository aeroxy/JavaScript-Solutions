const expect = require('../test/expect');
const method = require('./3-sum-a');

const testMethod = (...args) => {
  const result = method.apply(this, args);
  return JSON.stringify(result);
};

module.exports = () => {
  expect([[-1, 0, 1, 2, -1, -4]], [JSON.stringify([
    [-1, 0, 1],
    [-1, -1, 2]
  ])], testMethod);
}