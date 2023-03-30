/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  const insertionSort = (left, right) => {
    for (let i = left + 1; i <= right; i++) {
      const key = nums[i];
      let j = i - 1;
      while (j >= left && nums[j] > key) {
        nums[j + 1] = nums[j];
        j--;
      }
      nums[j + 1] = key;
    }
  }
  const quickSort = (left, right) => {
    if (left >= right) {
      return;
    }
    if (right - left + 1 <= 3) {
      insertionSort(left, right);
      return;
    }

    const mid = Math.floor((left + right) / 2);

    if (nums[left] > nums[mid]) {
      [nums[left], nums[mid]] = [nums[mid], nums[left]];
    }

    if (nums[left] > nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }

    if (nums[mid] > nums[right]) {
      [nums[mid], nums[right]] = [nums[right], nums[mid]];
    }

    [nums[mid], nums[right - 1]] = [nums[right - 1], nums[mid]];
    const pivot = nums[right - 1];

    let i = left;
    let j = right - 1;

    while (true) {
      while (nums[++i] < pivot) {}
      while (nums[--j] > pivot) {}
      if (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      } else {
        break;
      }
    }

    [nums[i], nums[right - 1]] = [nums[right - 1], nums[i]];

    quickSort(left, i - 1);
    quickSort(i + 1, right);
  }  

  quickSort(0, nums.length - 1);
}

module.exports = sortColors;