const expect = require("../test/expect");
const method = require("./solution1");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.deepEqual(result, output);
}

module.exports = {
  testCases: [
    () => expect(
      [
        [[1, 3], [6, 9]],
        [2, 5],
      ],
      [[1, 5], [6, 9]],
      testMethod,
    ),
    () => expect(
      [
        [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]],
        [4, 8],
      ],
      [[1, 2], [3, 10], [12, 16]],
      testMethod,
    ),
    () => expect(
      [
        [],
        [5, 7],
      ],
      [[5, 7]],
      testMethod,
    ),
    () => expect(
      [
        [[1, 5]],
        [6, 8],
      ],
      [[1, 5], [6, 8]],
      testMethod,
    ),
  ],
};
