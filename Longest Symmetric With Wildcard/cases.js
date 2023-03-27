const expect = require("../test/expect");
const method = require("./solution");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.equal(result, output);
}

module.exports = {
  testCases: [
    () => expect(['<><??>>'], 4, testMethod),
    () => expect(['??????'], 6, testMethod),
    () => expect(['<<?'], 2, testMethod),
    () => expect(['><><'], 2, testMethod),
  ],
};
