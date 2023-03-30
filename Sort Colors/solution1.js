/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  const partition = (low, high) => {
    let i = low;
    const pivot = nums[high];
  
    for (let j = low; j < high; j++) {
      if (nums[j] <= pivot) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }
  
    [nums[i], nums[high]] = [nums[high], nums[i]];
  
    return i;
  }
  
  const quickSort = (low, high) => {
    if (low < high) {
      const partitionIndex = partition(low, high);
      quickSort(low, partitionIndex - 1);
      quickSort(partitionIndex + 1, high);
    }
  }

  quickSort(0, nums.length - 1);
}

module.exports = sortColors;