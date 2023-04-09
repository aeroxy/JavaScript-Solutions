const expect = require("../test/expect");
const method = require("./solution2");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.equal(result, output);
}

module.exports = {
  testCases: [
    () => expect(
      [
        "leetcode",
        ["leet", "code"],
      ],
      true,
      testMethod,
    ),
    () => expect(
      [
        "applepenapple",
        ["apple", "pen"],
      ],
      true,
      testMethod,
    ),
    () => expect(
      [
        "catsandog",
        ["cats", "dog", "sand", "and", "cat"],
      ],
      false,
      testMethod,
    ),
    () => expect(
      [
        "cars",
        ["car", "ca", "rs"],
      ],
      true,
      testMethod,
    ),
    () => expect(
      [
        "catsandogcat",
        ["cats", "dog", "sand", "and", "cat", "an"],
      ],
      true,
      testMethod,
    ),
    () => expect(
      [
        "catscatdog",
        ["cat","cats","dog"],
      ],
      true,
      testMethod,
    ),
  ],
};
