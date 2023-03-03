const expect = require("../test/expect");
const method = require("./solution");
const assert = require("assert");

function testMethod(input, output) {
  assert.equal(method(input), output);
}

module.exports = {
  testCases: [
    () => {
      expect(1, "1", testMethod);
    },
    () => {
      expect(2, "11", testMethod);
    },
    () => {
      expect(3, "21", testMethod);
    },
    () => {
      expect(4, "1211", testMethod);
    },
  ],
};
