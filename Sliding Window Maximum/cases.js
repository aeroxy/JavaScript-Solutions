const expect = require("../test/expect");
const method = require("./solution1");
const assert = require("assert");

function testMethod(input, output) {
  return assert.deepEqual(
    method(...input),
    output,
  );
}

module.exports = {
  testCases: [
    () => expect(
      [
        [1, 3, -1, -3, 5, 3, 6, 7],
        3,
      ],
      [3, 3, 5, 5, 6, 7],
      testMethod,
    ),
    () => expect(
      [
        [1],
        1,
      ],
      [1],
      testMethod,
    ),
    () => expect(
      [
        [1, -1],
        1,
      ],
      [1, -1],
      testMethod,
    ),
    () => expect(
      [
        [1, 3, 1, 2, 0, 5],
        3,
      ],
      [3, 3, 2, 5],
      testMethod,
    ),
  ],
};
