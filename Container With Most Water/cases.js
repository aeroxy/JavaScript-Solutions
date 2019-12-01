const assert = require('assert');
const method = require('./container-with-most-water-a');

module.exports = () => {
  console.log([1,8,6,2,5,4,8,3,7], 49);
  assert.equal(method([1,8,6,2,5,4,8,3,7]), 49);
  console.log([2,3,4,5,18,17,6], 17);
  assert.equal(method([2,3,4,5,18,17,6]), 17);
}