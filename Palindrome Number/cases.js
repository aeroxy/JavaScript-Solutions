const assert = require('assert');
const method = require('./palindrome-number-c');

module.exports = () => {
  assert.equal(method(121), true);
  assert.equal(method(-121), false);
  assert.equal(method(10), false);
  assert.equal(method(100), false);
}