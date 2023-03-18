const expect = require("../test/expect");
const method = require("./solution2");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  assert.equal(result, output);
}

// this is the create node method
function createNode(id, left, right) {
  return {
    id,
    left,
    right,
  };
}

// these are node generation
const a = createNode('a');
const b = createNode('b');
const c = createNode('c', a, b);

const h = createNode('h');
const d = createNode('d', h);
const e = createNode('e');
const f = createNode('f', d, e);

const g = createNode('g', c, f);

module.exports = {
  testCases: [
    () => {
      expect([g, 'a', 'b'], 'c', testMethod);
    },
    () => {
      expect([g, 'd', 'e'], 'f', testMethod);
    },
    () => {
      expect([g, 'a', 'e'], 'g', testMethod);
    },
    () => {
      expect([g, 'h', 'e'], 'f', testMethod);
    },
    () => {
      expect([g, 'h', 'a'], 'g', testMethod);
    },
    () => {
      expect([g, 'g', 'a'], null, testMethod);
    },
  ],
};
