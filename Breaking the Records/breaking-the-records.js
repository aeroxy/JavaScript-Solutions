const breakingRecords = scores => {
  let min = scores[0];
  let max = min;
  const result = [0, 0];
  for (let score of scores.slice(1)) {
    if (score < min) {
      min = score;
      ++result[1];
    }
    if (score > max) {
      max = score;
      ++result[0];
    }
  }
  return result;
}

module.exports = breakingRecords;