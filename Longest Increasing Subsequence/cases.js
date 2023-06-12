const expect = require("../test/expect");
const method = require("./solution1");
const assert = require("assert");

function testMethod(input, output) {
  return assert.equal(
    method(...input),
    output,
  );
}

module.exports = {
  testCases: [
    () => expect(
      [
        [10,9,2,5,4,3,7,101,18],
      ],
      4,
      testMethod,
    ),
    () => expect(
      [
        [0,1,0,3,2,3],
      ],
      4,
      testMethod,
    ),
    () => expect(
      [
        [7,7,7,7,7,7,7],
      ],
      1,
      testMethod,
    ),
  ],
};
