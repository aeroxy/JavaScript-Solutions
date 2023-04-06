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
      [[7, 1, 5, 3, 6, 4]],
      5,
      testMethod,
    ),
    () => expect(
      [[7, 6, 4, 3, 1]],
      0,
      testMethod
    ),
  ],
};
