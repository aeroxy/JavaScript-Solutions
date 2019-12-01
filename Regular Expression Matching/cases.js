const assert = require('assert');
const method = require('./regular-expression-matching-h');

module.exports = () => {
  console.log('aa', 'a');
  assert.equal(method('aa', 'a'), false);
  console.log('aa', 'a*');
  assert.equal(method('aa', 'a*'), true);
  console.log('ab', '.*');
  assert.equal(method('ab', '.*'), true);
  console.log('aab', 'c*a*b');
  assert.equal(method('aab', 'c*a*b'), true);
  console.log('mississippi', 'mis*is*p*.');
  assert.equal(method('mississippi', 'mis*is*p*.'), false);
  console.log('mississippi', 'mis*is*ip*.');
  assert.equal(method('mississippi', 'mis*is*ip*.'), true);
  console.log('ab', '.*c');
  assert.equal(method('ab', '.*c'), false);
  console.log('', '.');
  assert.equal(method('', '.'), false);
  console.log('', '.*');
  assert.equal(method('', '.*'), true);
  console.log('aaa', 'aaaa');
  assert.equal(method('aaa', 'aaaa'), false);
  console.log('aaa', 'a*a');
  assert.equal(method('aaa', 'a*a'), true);
}