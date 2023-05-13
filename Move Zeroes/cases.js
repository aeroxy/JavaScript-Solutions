const expect = require("../test/expect");
const method = require("./solution2");
const assert = require("assert");

function testMethod(input, output) {
  method(...input);
  return assert.deepEqual(
    input[0],
    output,
  );
}

module.exports = {
  testCases: [
    () => expect(
      [
        [0, 1, 0, 3, 12],
      ],
      [1, 3, 12, 0, 0],
      testMethod,
    ),
    () => expect(
      [
        [0],
      ],
      [0],
      testMethod,
    ),
    () => expect(
      [
        [0,0,1],
      ],
      [1,0,0],
      testMethod,
    ),
    () => expect(
      [
        [1],
      ],
      [1],
      testMethod,
    ),
  ],
};
