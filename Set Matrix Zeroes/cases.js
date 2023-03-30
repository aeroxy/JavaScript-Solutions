const expect = require("../test/expect");
const method = require("./solution2");
const assert = require("assert");

function testMethod(input, output) {
  method(...input);
  return assert.deepEqual(input[0], output);
}

module.exports = {
  testCases: [
    () => expect(
      [[[1,1,1],[1,0,1],[1,1,1]]],
      [[1,0,1],[0,0,0],[1,0,1]],
      testMethod,
    ),
    () => expect(
      [[[0,1,2,0],[3,4,5,2],[1,3,1,5]]],
      [[0,0,0,0],[0,4,5,0],[0,3,1,0]],
      testMethod
    ),
    () => expect(
      [[[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]]],
      [[0,0,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
      testMethod
    ),
  ],
};
