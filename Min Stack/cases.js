const expect = require("../test/expect");
const MinStack = require("./solution3");
const assert = require("assert");

function testMethod(input, output) {
  const [methods, params] = input;
  const instance = new MinStack(...params[0]);
  const result = methods.map((method, index) => {
    if (method === 'MinStack') {
      return null;
    }
    return instance[method](...params[index]);
  });
  return assert.deepEqual(result, output);
}

module.exports = {
  testCases: [
    () => expect(
      [
        ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"],
        [[], [-2], [0], [-3], [], [], [], []]
      ],
      [null, null, null, null, -3, null, 0, -2],
      testMethod,
    ),
  ],
};
