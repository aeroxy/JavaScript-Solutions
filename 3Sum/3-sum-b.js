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
    let l = i + 1;
    let r = length - 1;
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        ++l;
        --r;
        while (nums[l] === nums[l - 1]) {
          ++l;
        }
        while (nums[r] === nums[r + 1]) {
          --r;
        }
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        --r;
      } else {
        ++l;
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