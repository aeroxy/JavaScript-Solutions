var MedianFinder = function() {
  this.nums = [];
  this.sorted = false;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.nums.push(num);
  this.sorted = false;
  return null;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if (!this.sorted) {
    this.nums = this.nums.sort((a, b) => a - b);
  }
  if (this.nums.length % 2) {
    const mid = Math.floor(this.nums.length / 2);
    return this.nums[mid];
  }
  const mid = this.nums.length / 2;
  return (this.nums[mid - 1] + this.nums[mid]) / 2;
};

module.exports = MedianFinder;
