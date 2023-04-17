const expect = require("../test/expect");
const Trie = require("./solution3");
const assert = require("assert");

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
function testMethod(input, output) {
  const [methods, params] = input;
  const instance = new Trie();
  const result = methods.map((method, idx) => {
    if (method === 'Trie') {
      return null;
    }
    return instance[method](...params[idx]);
  })
  return assert.deepEqual(
    result,
    output,
  );
}

module.exports = {
  testCases: [
    () => expect(
      [
        ["Trie", "insert", "search", "search", "startsWith", "insert", "search"],
        [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]],
      ],
      [null, null, true, false, true, null, true],
      testMethod,
    ),
  ],
};
