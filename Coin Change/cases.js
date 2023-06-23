const expect = require("../test/expect");
const method = require("./solution4");
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
        [1,2,5],
        11,
      ],
      3,
      testMethod,
    ),
    () => expect(
      [
        [2],
        3,
      ],
      -1,
      testMethod,
    ),
    () => expect(
      [
        [1],
        0,
      ],
      0,
      testMethod,
    ),
    () => expect(
      [
        [2,5,10,1],
        27,
      ],
      4,
      testMethod,
    ),
    () => expect(
      [
        [186,419,83,408],
        6249,
      ],
      20,
      testMethod,
    ),
    () => expect(
      [
        [2],
        1,
      ],
      -1,
      testMethod,
    ),
  ],
};
