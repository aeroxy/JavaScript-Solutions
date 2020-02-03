const expect = require('../test/expect');
const method = require('./3-sum-c');
const assert = require('assert');

const testMethod = (input, output) => {
  const result = method.apply(this, input);
  output.forEach((arr1, idx1) => {
    result.forEach((arr2, idx2) => {
      let yes = Array.isArray(arr2);
      if (yes) {
        for (let i = 0; i < 3; ++i) {
          if (arr1[i] !== arr2[i]) {
            yes = false;
            break;
          }
        }
      }
      if (yes) {
        delete output[idx1];
        delete result[idx2];
      }
    });
  });
  return assert.equal(output[0], result[0]);
};

module.exports = () => {

    [-1, 0, 1],
    [-1, -1, 2]

}
