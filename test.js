const assert = require('assert');
const method = require('./ZigZag Conversion/zigzag-conversion');

it('TEST', () => {
  assert.equal(method('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR');
  assert.equal(method('PAYPALISHIRING', 4), 'PINALSIGYAHRPI');
});