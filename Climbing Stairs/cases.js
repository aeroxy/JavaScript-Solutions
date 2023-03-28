const expect = require("../test/expect");
const method = require("./solution");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.equal(result, output);
}

module.exports = {
  testCases: [
    () => expect(
      [2],
      2,
      testMethod,
    ),
    () => expect(
      [3],
      3,
      testMethod,
    ),
    () => expect(
      [44],
      1134903170,
      testMethod,
    ),
  ],
};
