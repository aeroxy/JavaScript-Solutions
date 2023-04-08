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
      [
        [2, 2, 1],
      ],
      1,
      testMethod,
    ),
    () => expect(
      [
        [4, 1, 2, 1, 2],
      ],
      4,
      testMethod,
    ),
    () => expect(
      [
        [1],
      ],
      1,
      testMethod,
    ),
  ],
};
