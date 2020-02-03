const assert = require('assert');

module.exports = (i, o, method) => {
  console.log({
    input: i,
    output: o
  });
  return assert.equal(method(...i), o);
}