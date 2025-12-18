const fs = require("fs");
const method = require("./solution");
const assert = require("assert");

module.exports = {
  testCases: [
    // Case 1
    () => {
      const input = fs.readFileSync("./Common Ancestor Graph/input1.txt", "utf-8");
      const expected = fs.readFileSync("./Common Ancestor Graph/output1.txt", "utf-8");
      const actual = method(input);
      assert.equal(actual, expected);
    },

    // Case 2
    () => {
      const input = fs.readFileSync("./Common Ancestor Graph/input2.txt", "utf-8");
      const expected = fs.readFileSync("./Common Ancestor Graph/output2.txt", "utf-8");
      const actual = method(input);
      assert.equal(actual, expected);
    },

    // Case 3
    () => {
      const input = fs.readFileSync("./Common Ancestor Graph/input3.txt", "utf-8");
      const expected = fs.readFileSync("./Common Ancestor Graph/output3.txt", "utf-8");
      const actual = method(input);
      assert.equal(actual, expected);
    },

    // Case 4
    () => {
      const input = fs.readFileSync("./Common Ancestor Graph/input4.txt", "utf-8");
      const expected = fs.readFileSync("./Common Ancestor Graph/output4.txt", "utf-8");
      const actual = method(input);
      assert.equal(actual, expected);
    },
  ]
};