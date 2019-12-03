const expect = require('../test/expect');
const method = require('./longest-common-prefix-a');

module.exports = () => {
  expect([['flower','flow','flight']], ['fl'], method);
  expect([['dog','racecar','car']], [''], method);
  expect([[]], [''], method);
  expect([['c','c']], ['c'], method);
}