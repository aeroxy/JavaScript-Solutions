const expect = require("../test/expect");
const method = require("./solution1");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  const resultJSONStr = result.sort();
  const outputJSONStr = output.sort();
  return assert.deepEqual(resultJSONStr, outputJSONStr);
}

module.exports = {
  testCases: [
    () => expect(
      [4],
      [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]],
      testMethod,
    ),
    () => expect(
      [1],
      [["Q"]],
      testMethod,
    ),
  ],
};
