const expect = require("../test/expect");
const method = require("./solution");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  const resultJSONStr = result.map((arr) => JSON.stringify(arr)).sort();
  const outputJSONStr = output.map((arr) => JSON.stringify(arr)).sort();
  return assert.deepEqual(resultJSONStr, outputJSONStr);
}

module.exports = {
  testCases: [
    () => expect([[1,2,3]], [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]], testMethod),
    () => expect([[0,1]], [[0,1],[1,0]], testMethod),
    () => expect([[1]], [[1]], testMethod),
  ],
};
