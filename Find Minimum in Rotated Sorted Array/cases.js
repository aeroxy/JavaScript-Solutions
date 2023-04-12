const expect = require("../test/expect");
const method = require("./solution3");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.equal(result, output);
}

module.exports = {
  testCases: [
    () => expect(
      [
        [3, 4, 5, 1, 2],
      ],
      1,
      testMethod,
    ),
    () => expect(
      [
        [4, 5, 6, 7, 0, 1, 2],
      ],
      0,
      testMethod,
    ),
    () => expect(
      [
        [11, 13, 15, 17],
      ],
      11,
      testMethod,
    ),
  ],
};
