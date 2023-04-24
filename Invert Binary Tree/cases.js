const expect = require("../test/expect");
const { arrayToTree, treeToArray } = require("../test/utils");
const method = require("./solution2");
const assert = require("assert");

function testMethod(input, output) {
  return assert.deepEqual(
    treeToArray(
      method(...input),
    ),
    output,
  );
}

module.exports = {
  testCases: [
    () => expect(
      [
        arrayToTree([4,2,7,1,3,6,9]),
      ],
      [4,7,2,9,6,3,1],
      testMethod,
    ),
    () => expect(
      [
        arrayToTree([2,1,3]),
      ],
      [2,3,1],
      testMethod,
    ),
    () => expect(
      [
        null,
      ],
      [],
      testMethod,
    ),
  ],
};
