const main = (n, s) => {
  let aboveSeaLevel = true;
  let seaLevel = 0;
  let valleys = 0;
  for (let c of s) {
    if (c === 'U') {
      ++seaLevel;
    } else {
      --seaLevel;
    }
    if (aboveSeaLevel && seaLevel < 0) {
      aboveSeaLevel = false;
      ++valleys;
    }
    if (!aboveSeaLevel && seaLevel >= 0) {
      aboveSeaLevel = true;
    }
  }
  return valleys;
}

module.exports = main;