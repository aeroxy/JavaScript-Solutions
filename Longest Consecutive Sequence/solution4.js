/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  function quicksortInPlace(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
      return;
    }
  
    const pivotIndex = partition(arr, left, right);
    quicksortInPlace(arr, left, pivotIndex - 1);
    quicksortInPlace(arr, pivotIndex + 1, right);
  }
  
  function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left;
  
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
  
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
  }
  
  quicksortInPlace(nums);

  let result = 0;
  let length = 0;
  let last = -Infinity;

  for (let num of nums) {
    if (num === last + 1) {
      ++length;
    } else if (num === last) {
      // pass
    } else {
      result = Math.max(result, length);
      length = 1;
    }
    last = num;
  }

  result = Math.max(result, length);

  return result;
};

module.exports = longestConsecutive;