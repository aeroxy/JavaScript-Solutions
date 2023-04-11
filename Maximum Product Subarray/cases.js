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
        [2, 3, -2, 4],
      ],
      6,
      testMethod,
    ),
    () => expect(
      [
        [-2, 0, -1],
      ],
      0,
      testMethod,
    ),
    () => expect(
      [
        [-2],
      ],
      -2,
      testMethod,
    ),
    () => expect(
      [
        [-4,-3],
      ],
      12,
      testMethod,
    ),
    () => expect(
      [
        [0, -1, 4, -4, 5, -2, -1, -1, -2, -3, 0, -3, 0, 1, -1, -4, 4, 6, 2, 3, 0, -5, 2, 1, -4, -2, -1, 3, -4, -6, 0, 2, 2, -1, -5, 1, 1, 5, -6, 2, 1, -3, -6, -6, -3, 4, 0, -2, 0, 2],
      ],
      388800,
      testMethod,
    ),
  ],
};
