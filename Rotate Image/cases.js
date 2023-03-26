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
      [[[1,2,3],[4,5,6],[7,8,9]]],
      [[7,4,1],[8,5,2],[9,6,3]],
      testMethod,
    ),
    () => expect(
      [[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]],
      [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]],
      testMethod,
    ),
  ],
};
