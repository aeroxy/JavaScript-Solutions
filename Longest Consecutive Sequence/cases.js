const expect = require("../test/expect");
const method = require("./solution5");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.equal(result, output);
}

module.exports = {
  testCases: [
    () => expect(
      [
        [100, 4, 200, 1, 3, 2],
      ],
      4,
      testMethod,
    ),
    () => expect(
      [
        [0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
      ],
      9,
      testMethod,
    ),
    () => expect(
      [
        [],
      ],
      0,
      testMethod,
    ),
    () => expect(
      [
        [0, 1, 2],
      ],
      3,
      testMethod,
    ),
  ],
};
