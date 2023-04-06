const expect = require("../test/expect");
const method = require("./solution1");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.deepEqual(result, output);
}

module.exports = {
  testCases: [
    () => expect(
      [5],
      [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
      testMethod,
    ),
    () => expect(
      [1],
      [[1]],
      testMethod
    ),
  ],
};
