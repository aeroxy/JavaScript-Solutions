const expect = require("../test/expect");
const method = require("./solution");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  assert.equal(result, output);
}

module.exports = {
  testCases: [
    () => {
      expect(['2', '3'], '6', testMethod);
    },
    () => {
      expect(['123', '456'], '56088', testMethod);
    },
  ],
};
