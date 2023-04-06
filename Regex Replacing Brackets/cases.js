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
      [
        "a.b['c']",
      ],
      "a.b.c",
      testMethod,
    ),
    () => expect(
      [
        "a[0].b"
      ],
      "a.0.b",
      testMethod
    ),
    () => expect(
      [
        "a.b[\"c\"]"
      ],
      "a.b.c",
      testMethod
    ),
  ],
};
