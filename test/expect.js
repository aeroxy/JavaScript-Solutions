const assert = require('assert');

module.exports = (input, output, testMethod = assert.equal) => {
  console.log({
    input,
    output
  });
  return testMethod(input, output);
}
