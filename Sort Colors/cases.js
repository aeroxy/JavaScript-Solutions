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
      [ [2,0,2,1,1,0] ],
      [0,0,1,1,2,2],
      testMethod,
    ),
    () => expect(
      [ [2,0,1] ],
      [0,1,2],
      testMethod
    ),
  ],
};
