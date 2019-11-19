const assert = require('assert');
const method = require('./Reverse Integer/reverse-integer-c');

it('TEST', () => {
  assert.equal(method(123), 321);
  assert.equal(method(-123), -321);
  assert.equal(method(120), 21);
  assert.equal(method(1534236469), 0);
});