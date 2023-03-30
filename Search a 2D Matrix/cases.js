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
      [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13],
      false,
      testMethod,
    ),
    () => expect(
      [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3],
      true,
      testMethod
    ),
    () => expect(
      [[[1]], 0],
      false,
      testMethod
    ),
    () => expect(
      [[[1,3]], 3],
      true,
      testMethod
    ),
  ],
};
