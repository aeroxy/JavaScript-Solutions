const expect = require("../test/expect");
const method = require("./solution1");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.equal(result, output);
}

const generateTestCases = () => {
  const array = [];
  for (let i = 1; i <= 100; ++i) {
    array.push(i);
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  const nums = array.splice(randomIndex, 1);
  return [[array], nums[0]];
}

module.exports = {
  testCases: [
    () => expect(...generateTestCases(), testMethod),
    () => expect(...generateTestCases(), testMethod),
    () => expect(...generateTestCases(), testMethod),
    () => expect(...generateTestCases(), testMethod),
  ],
};
