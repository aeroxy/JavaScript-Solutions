const expect = require("../test/expect");
const method = require("./solution2");
const assert = require("assert");

function testMethod(input, output) {
  return assert.deepEqual(
    method(...input).sort((a, b) => a - b),
    output,
  );
}

module.exports = {
  testCases: [
    () => expect(
      [
        [1,1,1,2,2,3],
        2,
      ],
      [1,2],
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
        [4,1,-1,2,-1,2,3],
        2,
      ],
      [-1,2],
      testMethod,
    ),
  ],
};
