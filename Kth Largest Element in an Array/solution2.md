# Intuition
To find the kth largest element in an array, we can use the QuickSelect algorithm, which is a modification of the QuickSort algorithm. The algorithm partitions the array around a random pivot and recursively searches for the kth largest element in the correct partition.

# Approach
1.  Implement a helper function, `swap()`, to swap two elements in the array.
2.  Implement a helper function, `partition()`, to partition the array around a pivot index. This function moves elements greater than the pivot value to the left and elements less than the pivot value to the right.
3.  Implement the `quickSelect()` function, which recursively searches for the kth largest element. If the pivot index is equal to the target index, return the pivot value. Otherwise, if the target index is less than the pivot index, search in the left partition, and if the target index is greater than the pivot index, search in the right partition.
4.  Call the `quickSelect()` function with the given array and the target index (k - 1).

# Complexity
- Time complexity: The average case is $$O(n)$$, and the worst case is $$O(n^2)$$ when using a random pivot. However, the worst case is very rare in practice.
- Space complexity: $$O(log(n))$$ for the recursive call stack. The space complexity can be reduced to $$O(1)$$ by using an iterative approach instead of recursion.

# Code
```js
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
```