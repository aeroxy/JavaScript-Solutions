const expect = require("../test/expect");
const method = require("./solution2");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.deepEqual(result, output);
}

module.exports = {
  testCases: [
    () => expect(
      [
        [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
        "ABCCED",
      ],
      true,
      testMethod,
    ),
    () => expect(
      [
        [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
        "SEE",
      ],
      true,
      testMethod
    ),
    () => expect(
      [
        [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
        "ABCB",
      ],
      false,
      testMethod
    ),
    () => expect(
      [
        [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]],
        "ABCESEEEFS",
      ],
      true,
      testMethod
    ),
  ],
};
