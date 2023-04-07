const expect = require("../test/expect");
const { arrayToTree } = require("../test/utils");
const method = require("./solution1");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.equal(result, output);
}

module.exports = {
  testCases: [
    () => expect(
      [
        arrayToTree([1, 2, 3]),
      ],
      6,
      testMethod,
    ),
    () => expect(
      [
        arrayToTree([-10, 9, 20, null, null, 15, 7]),
      ],
      42,
      testMethod,
    ),
  ],
};
