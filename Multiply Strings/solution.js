/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
  const m = num1.length;
  const n = num2.length;
  const pos = new Array(m + n).fill(0);
  
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const product = parseInt(num1[i], 10) * parseInt(num2[j], 10);
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = product + pos[p2];
      pos[p1] += Math.floor(sum / 10);
      pos[p2] = sum % 10;
    }
  }

  const sb = [];
  for (let p of pos) {
    if (!(sb.length === 0 && p === 0)) {
      sb.push(p);
    }
  }
  
  return sb.length === 0 ? "0" : sb.join("");
}

module.exports = multiply;