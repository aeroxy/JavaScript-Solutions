const expect = require("../test/expect");
const method = require("./solution4");
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
    () => expect(['>???'], 2, testMethod),
    () => expect([Array(1000).fill('?').join('')], 1000, testMethod),
  ],
};
