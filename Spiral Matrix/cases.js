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
      [[[1,2,3],[4,5,6],[7,8,9]]],
      [1,2,3,6,9,8,7,4,5],
      testMethod,
    ),
    () => expect(
      [[[1,2,3,4],[5,6,7,8],[9,10,11,12]]],
      [1,2,3,4,8,12,11,10,9,5,6,7],
      testMethod,
    ),
    () => expect(
      [[[2,5],[8,4],[0,-1]]],
      [2,5,4,-1,0,8],
      testMethod,
    ),
  ],
};
