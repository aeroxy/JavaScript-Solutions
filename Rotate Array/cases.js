const expect = require("../test/expect");
const method = require("./solution2");
const assert = require("assert");

function testMethod(input, output) {
  method(...input);
  return assert.deepEqual(input[0], output);
}

module.exports = {
  testCases: [
    () => expect(
      [[1, 2, 3, 4, 5, 6, 7], 3],
      [5, 6, 7, 1, 2, 3, 4],
      testMethod,
    ),
    () => expect(
      [[-1, -100, 3, 99], 2],
      [3, 99, -1, -100],
      testMethod,
    ),
  ],
};
