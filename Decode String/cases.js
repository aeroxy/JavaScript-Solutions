const expect = require("../test/expect");
const method = require("./solution1");
const assert = require("assert");

function testMethod(input, output) {
  return assert.deepEqual(
    method(...input),
    output,
  );
}

module.exports = {
  testCases: [
    () => expect(
      [
        '3[a]2[bc]',
      ],
      'aaabcbc',
      testMethod,
    ),
    () => expect(
      [
        '3[a2[c]]',
      ],
      'accaccacc',
      testMethod,
    ),
    () => expect(
      [
        '2[abc]3[cd]ef',
      ],
      'abcabccdcdcdef',
      testMethod,
    ),
  ],
};
