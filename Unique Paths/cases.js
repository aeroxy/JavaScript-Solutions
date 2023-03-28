const expect = require("../test/expect");
const method = require("./solution1");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.equal(result, output);
}

module.exports = {
  testCases: [
    () => expect(
      [3, 7],
      28,
      testMethod,
    ),
    () => expect(
      [3, 2],
      3,
      testMethod,
    ),
    () => expect(
      [4, 4],
      20,
      testMethod,
    ),
    () => expect(
      [51, 9],
      1916797311,
      testMethod,
    ),
  ],
};
