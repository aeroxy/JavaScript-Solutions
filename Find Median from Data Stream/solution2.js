var MedianFinder = function() {
  this.nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  let left = 0;
  let right = this.nums.length - 1;

  while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (this.nums[mid] === num) {
      this.nums.splice(mid, 0, num);
      return;
    } else if (this.nums[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  this.nums.splice(left, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  const mid = Math.floor(this.nums.length / 2);
  if (this.nums.length % 2) {
    return this.nums[mid];
  } else {
    return (this.nums[mid - 1] + this.nums[mid]) / 2;
  }
};

module.exports = MedianFinder;
