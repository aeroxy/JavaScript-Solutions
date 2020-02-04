const main = (a, k) => {
  const length = a.length;
  let sum = 0;
  let count = 0;
  let max_count = 0;

  for (let i = 0; i < length; ++i) {
    const new_sum = sum + a[i];
    if (new_sum <= k) {
      sum = new_sum;
      ++count;
    } else if (sum !== 0) {
      sum = new_sum - a[i - count];
    }
    if (count > max_count) {
      max_count = count;
    }
  }
  return max_count;
}

module.exports = main;