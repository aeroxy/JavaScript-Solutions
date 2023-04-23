/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  const swap = (i, j) => {
    [
      nums[i],
      nums[j],
    ] = [
        nums[j],
        nums[i],
      ];
  };

  const partition = (left, right, pivotIdx) => {
    let pivot = nums[pivotIdx];
    swap(right, pivotIdx);

    let storeIdx = left;

    for (let i = left; i < right; ++i) {
      if (nums[i] > pivot) {
        swap(storeIdx, i);
        ++storeIdx;
      }
    }
    swap(storeIdx, right);
    return storeIdx;
  };

  const quickSelect = (left, right, x) => {
    if (left === right) {
      return nums[left];
    }
    const pivotIdx = partition(
      left,
      right,
      Math.floor(
        Math.random() * (right - left + 1),
      ) + left,
    );

    if (pivotIdx === x) {
      return nums[pivotIdx];
    }
    return x < pivotIdx
      ? quickSelect(left, pivotIdx - 1, x)
      : quickSelect(pivotIdx + 1, right, x);
  };

  return quickSelect(0, nums.length - 1, k - 1);
}

module.exports = findKthLargest;