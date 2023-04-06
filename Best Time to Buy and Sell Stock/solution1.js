/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let result = 0;
  let l = 0;
  let r = 1;
  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      result = Math.max(result, prices[r] - prices[l]);
    } else {
      l = r;
    }
    ++r;
  }
  return result;
};

module.exports = maxProfit;