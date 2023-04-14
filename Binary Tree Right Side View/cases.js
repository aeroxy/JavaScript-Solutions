const expect = require("../test/expect");
const { arrayToTree } = require("../test/utils");
const method = require("./solution2");
const assert = require("assert");

function testMethod(input, output) {
  return assert.deepEqual(method(...input), output);
}

module.exports = {
  testCases: [
    () => expect(
      [
        arrayToTree([1, 2, 3, null, 5, null, 4]),
      ],
      [1, 3, 4],
      testMethod,
    ),
    () => expect(
      [
        arrayToTree([1, null, 3]),
      ],
      [1, 3],
      testMethod,
    ),
    () => expect(
      [
        arrayToTree([1, 3, null]),
      ],
      [1, 3],
      testMethod,
    ),
    () => expect(
      [
        arrayToTree([]),
      ],
      [],
      testMethod,
    ),
  ],
};
