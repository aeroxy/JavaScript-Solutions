const expect = require("../test/expect");
const method = require("./solution3");
const assert = require("assert");

function testMethod(input, output) {
  return assert.equal(method(...input), output);
}

module.exports = {
  testCases: [
    () => expect(
      [
        [
          ["1", "1", "1", "1", "0"],
          ["1", "1", "0", "1", "0"],
          ["1", "1", "0", "0", "0"],
          ["0", "0", "0", "0", "0"]
        ],
      ],
      1,
      testMethod,
    ),
    () => expect(
      [
        [
          ["1", "1", "0", "0", "0"],
          ["1", "1", "0", "0", "0"],
          ["0", "0", "1", "0", "0"],
          ["0", "0", "0", "1", "1"]
        ],
      ],
      3,
      testMethod,
    ),
    () => expect(
      [
        [
          ["1", "1", "1"],
          ["0", "1", "0"],
          ["1", "1", "1"]
        ],
      ],
      1,
      testMethod,
    ),
    () => expect(
      [
        [
          ["1", "0", "1", "1", "1"],
          ["1", "0", "1", "0", "1"],
          ["1", "1", "1", "0", "1"]
        ],
      ],
      1,
      testMethod,
    ),
  ],
};
