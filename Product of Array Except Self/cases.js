const expect = require("../test/expect");
const method = require("./solution2");
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
        [1, 2, 3, 4],
      ],
      [24, 12, 8, 6],
      testMethod,
    ),
    () => expect(
      [
        [-1, 1, 0, -3, 3],
      ],
      [0, 0, 9, 0, 0],
      testMethod,
    ),
  ],
};
