/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
  const result = [];
  const length = nums.length;
  if (length < 3) {
    return result;
  }
  const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  const partition = (arr, i, j) => {
    const pivot = arr[(i + j) >> 1];
    while (i <= j) {
      while (arr[i] < pivot) {
        ++i;
      }
      while (arr[j] > pivot) {
        --j;
      }
      if (i <= j) {
        swap(arr, i, j);
        ++i;
        --j;
      }
    }
    return i;
  }
  const quickSort = (arr, i, j) => {
    let index = partition(arr, i, j);
    if (i < j - 1) {
      quickSort(arr, i, index - 1);
    }
    if (index < j) {
      quickSort(arr, index, j);
    }
    return arr;
  }
  quickSort(nums, 0, length - 1);
  let last;
  for (let i = 0; i < length - 2; ++i) {
    if (nums[i] > 0) {
      return result;
    }
    if (nums[i] === last) {
      continue;
    }
    last = nums[i];
    let j = i + 1;
    let k = length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        ++j;
        --k;
        while (j < k && nums[j] === nums[j - 1]) {
          ++j;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          --k;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        --k;
      } else {
        ++j;
      }
    }
  }
  return result;
};
/**
 * 148 ms
 * 46.5 MB
 */

module.exports = threeSum;