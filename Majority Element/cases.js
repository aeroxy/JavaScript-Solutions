const expect = require("../test/expect");
const method = require("./solution2");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.equal(result, output);
}

module.exports = {
  testCases: [
    () => expect(
      [[-3, 2, -3]],
      -3,
      testMethod,
    ),
    () => expect(
      [[3, 2, 3]],
      3,
      testMethod,
    ),
    () => expect(
      [[2, 2, 1, 1, 1, 2, 2]],
      2,
      testMethod,
    ),
  ],
};
