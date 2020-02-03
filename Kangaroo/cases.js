const expect = require('../test/expect');
const method = require('./kangaroo');

module.exports = () => {
  expect([0, 3, 4, 2], 'YES', method);
  expect([43, 2, 70, 2], 'NO', method);
};