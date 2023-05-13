const expect = require("../test/expect");
const method = require("./solution1");
const assert = require("assert");

function testMethod(input, output) {
  return assert.equal(
    method(...input),
    output,
  );
}

module.exports = {
  testCases: [
    () => expect(
      [
        [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]],
        5,
      ],
      true,
      testMethod,
    ),
    () => expect(
      [
        [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]],
        20,
      ],
      false,
      testMethod,
    ),
    () => expect(
      [
        [
          [1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
          [11, 12, 13, 14, 15],
          [16, 17, 18, 19, 20],
          [21, 22, 23, 24, 25],
        ],
        19,
      ],
      true,
      testMethod,
    ),
  ],
};
