const expect = require("../test/expect");
const method = require("./solution1");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input).map((arr) => arr.join(",")).sort();
  return assert.deepEqual(result, output.map((arr) => arr.join(",")).sort());
}

module.exports = {
  testCases: [
    () => expect(
      [
        "aab",
      ],
      [["a", "a", "b"], ["aa", "b"]],
      testMethod,
    ),
    () => expect(
      [
        "a",
      ],
      [["a"]],
      testMethod,
    ),
  ],
};
