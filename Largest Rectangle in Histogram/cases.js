const expect = require("../test/expect");
const method = require("./solution2");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.deepEqual(result, output);
}

module.exports = {
  testCases: [
    () => expect(
      [
        [2,1,5,6,2,3],
      ],
      10,
      testMethod,
    ),
    () => expect(
      [
        [2,4],
      ],
      4,
      testMethod
    ),
    () => expect(
      [
        [6,4,2,0,3,2,0,3,1,4,5,3,2,7,5,3,0,1,2,1,3,4,6,8,1,3],
      ],
      14,
      testMethod
    ),
  ],
};
