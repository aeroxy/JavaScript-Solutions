const assert = require('assert');
const method = require('./Median of Two Sorted Arrays/median-of-two-sorted-arrays-d');

it('TEST', () => {
  assert.equal(method([1, 3], [2]), 2);
  assert.equal(method([1, 2], [3, 4]), 2.5);
  assert.equal(method([], [1]), 1);
  assert.equal(method([2], [-2, -1]), -1);
  assert.equal(method([0, 0], [0, 0]), 0);
});