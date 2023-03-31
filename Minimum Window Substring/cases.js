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
      [ "ADOBECODEBANC", "ABC" ],
      "BANC",
      testMethod,
    ),
    () => expect(
      [ "a", "a" ],
      "a",
      testMethod
    ),
    () => expect(
      [ "a", "aa" ],
      "",
      testMethod
    ),
  ],
};
