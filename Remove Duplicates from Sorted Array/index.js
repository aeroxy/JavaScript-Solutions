/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(array) {
  const set = new Set(array);
  let index = 0;
  set.forEach((num) => {
    array[index++] = num;
  });
  return set.size;
};

module.exports = removeDuplicates;