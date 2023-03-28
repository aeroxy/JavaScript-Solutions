const expect = require("../test/expect");
const method = require("./solution3");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input).map((arr) => JSON.stringify(arr)).sort();
  return assert.deepEqual(result, output.map((arr) => JSON.stringify(arr)).sort());
}

module.exports = {
  testCases: [
    () => expect(
      [[[1,3],[2,6],[8,10],[15,18]]],
      [[1,6],[8,10],[15,18]],
      testMethod,
    ),
    () => expect(
      [[[1,4],[4,5]]],
      [[1,5]],
      testMethod,
    ),
    () => expect(
      [[[2,3],[4,5],[6,7],[8,9],[1,10]]],
      [[1,10]],
      testMethod,
    ),
  ],
};
