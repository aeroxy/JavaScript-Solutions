function findAllTriplets(array, sum) {
  const result = new Set();
  const arrayLength = array.length;
  if (arrayLength < 3) {
    return Array.from(result);
  }
  array.sort((a, b) => a - b);
  const average = sum / 3;
  for (let i = 0; i < arrayLength - 2; i++) {
    if (array[i] > average) {
      break;
    }
    const remain = sum - array[i];
    let pointer1 = i + 1;
    let pointer2 = arrayLength - 1;
    while (pointer1 < pointer2) {
      const pointerSum = array[pointer1] + array[pointer2];
      if (pointerSum === remain) {
        result.add(
          JSON.stringify([array[i], array[pointer1], array[pointer2]])
        );
        pointer1++;
        pointer2--;
      } else if (sum < remain) {
        pointer1++;
      } else {
        pointer2--;
      }
    }
  }
  return Array.from(result).map((string) => JSON.parse(string));
};

module.exports = findAllTriplets;