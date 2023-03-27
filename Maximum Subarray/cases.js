const expect = require("../test/expect");
const method = require("./solution");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.equal(result, output);
}

module.exports = {
  testCases: [
    () => expect(
      [[-2,1,-3,4,-1,2,1,-5,4]],
      6,
      testMethod,
    ),
    () => expect(
      [[1]],
      1,
      testMethod,
    ),
    () => expect(
      [[5,4,-1,7,8]],
      23,
      testMethod,
    ),
    () => expect(
      [[0]],
      0,
      testMethod,
    ),
    () => expect(
      [[8,-19,5,-4,20]],
      21,
      testMethod,
    ),
  ],
};
