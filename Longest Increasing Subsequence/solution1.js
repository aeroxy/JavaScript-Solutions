/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const piles = [];
  
  for (let num of nums) {
    let left = 0;
    let right = piles.length;

    while (left < right) {
      const mid = (left + right) >> 1;
      if (piles[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left === piles.length) {
      piles.push(num);
    } else {
      piles[left] = num;
    }
    console.log(left, [...piles]);
  }
  
  return piles.length;
};

module.exports = lengthOfLIS;
