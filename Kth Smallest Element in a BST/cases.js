const expect = require("../test/expect");
const { arrayToTree } = require("../test/utils");
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
        arrayToTree([3,1,4,null,2]),
        1,
      ],
      1,
      testMethod,
    ),
    () => expect(
      [
        arrayToTree([3,1,4,null,2]),
        1,
      ],
      1,
      testMethod,
    ),
    () => expect(
      [
        arrayToTree([5,3,6,2,4,null,null,1]),
        3,
      ],
      3,
      testMethod,
    ),
  ],
};
