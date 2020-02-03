const findNumsBasedOnB = (nums, b) => nums.filter(num => {
  // console.log('new num', num);
  for (let n of b) {
    // console.log({
    //   n,
    //   num,
    //   remainder: n % num,
    //   if: !!(n % num) 
    // });
    if (n % num) {
      // console.log('should be false', num);
      return false;
    }
  }
  // console.log('should be true', num);
  return true;
});

const findNumsBasedOnA = (a, b) => {
  const nums = [];
  bigLoop:
  for (let factor = 1;;++factor) {
    const num = factor * a[0];
    // console.log({ num });
    if (num > b[0]) {
      break;
    }
    if (num < a[a.length - 1]) {
      continue;
    }
    for (let i = 1; i < a.length; ++i) {
      if (num % a[i]) {
        continue bigLoop;
      }
    }
    nums.push(num);
  }
  return nums;
};

const getTotalX = (a, b) => {
  a = a.sort((x, y) => (x - y));
  b = b.sort((x, y) => (x - y));
  const nums = findNumsBasedOnA(a, b);
  // console.log('findNumsBasedOnA', { nums });
  const result = findNumsBasedOnB(nums, b);
  // console.log('findNumsBasedOnB', { result });
  return result.length;
};

module.exports = getTotalX;