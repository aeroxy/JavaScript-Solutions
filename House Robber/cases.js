const expect = require("../test/expect");
const method = require("./solution1");
const assert = require("assert");

function testMethod(input, output) {
  return assert.equal(method(...input), output);
}

module.exports = {
  testCases: [
    () => expect(
      [[1, 2, 3, 1]],
      4,
      testMethod,
    ),
    () => expect(
      [[2, 7, 9, 3, 1]],
      12,
      testMethod,
    ),
    () => expect(
      [[0]],
      0,
      testMethod,
    ),
    () => expect(
      [[2, 1, 1, 2]],
      4,
      testMethod,
    ),
  ],
};
