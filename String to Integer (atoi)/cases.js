const assert = require('assert');
const method = require('./string-to-integer-c');

module.exports = () => {
  assert.equal(method('42'), 42);
  assert.equal(method('   -42'), -42);
  assert.equal(method('4193 with words'), 4193);
  assert.equal(method('-91283472332'), -2147483648);
  assert.equal(method('2147483648'), 2147483647);
}