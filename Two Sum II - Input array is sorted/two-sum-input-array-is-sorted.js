const twoSum = function(numbers, target) {
  let p1 = 0,
    p2 = numbers.length;
  if (numbers[p1] > target) return;
  let sum = numbers[p1] + numbers[p2];
  while (p1 < p2) {
    if (sum === target) {
      return [p1 + 1, p2 + 1];
    } else {
      sum < target ? ++p1 : --p2;
      sum = numbers[p1] + numbers[p2];
    }
  }
};