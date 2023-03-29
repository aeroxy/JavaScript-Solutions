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
      ["horse", "ros"],
      3,
      testMethod,
    ),
    () => expect(
      ["intention", "execution"],
      5,
      testMethod,
    ),
  ],
};
