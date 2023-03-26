const expect = require("../test/expect");
const method = require("./solution3");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.equal(result, output);
}

module.exports = {
  testCases: [
    () => expect([[2,3,1,1,4]], 2, testMethod),
    () => expect([[2,3,0,1,4]], 2, testMethod),
    () => expect([[0]], 0, testMethod),
    () => expect([[5,6,4,4,6,9,4,4,7,4,4,8,2,6,8,1,5,9,6,5,2,7,9,7,9,6,9,4,1,6,8,8,4,4,2,0,3,8,5]], 5, testMethod),
  ],
};
