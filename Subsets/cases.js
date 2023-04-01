const expect = require("../test/expect");
const method = require("./solution2");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input).map((arr) => JSON.stringify(arr)).sort();
  return assert.deepEqual(result, output.map((arr) => JSON.stringify(arr)).sort());
}

module.exports = {
  testCases: [
    () => expect(
      [ [1,2,3] ],
      [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]],
      testMethod,
    ),
    () => expect(
      [ [0] ],
      [[],[0]],
      testMethod
    ),
  ],
};
