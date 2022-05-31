function largestCombination(array, n) {
  array.sort((a, b) => a - b);
  const result = [];
  const maxNumStr = `${n}`;
  let getMax = false;
  for (let i = 0; i < maxNumStr.length; ++i) {
    const digit = parseInt(maxNumStr[i], 10);
    for (let num of array) {
      
    }
  }
}

module.exports = largestCombination;