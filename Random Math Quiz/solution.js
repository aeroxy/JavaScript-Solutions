function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function generateRandomMathQuiz() {
  const array = [,,,'=',];
  const sign = ['+', '-'][getRandomNumber(0, 1)];
  const emptyIndex = [0, 2, 4][getRandomNumber(0, 2)];
  array[1] = sign;
  array[emptyIndex] = '__';
  if (sign === '+' && emptyIndex === 4) {
    const seed = getRandomNumber(1, 18);
    array[0] = seed;
    array[2] = getRandomNumber(1, 19 - seed);
  }
  if (sign === '-' && emptyIndex === 0) {
    const seed = getRandomNumber(1, 18);
    array[2] = seed;
    array[4] = getRandomNumber(1, 19 - seed);
  }
  if (sign === '+' && [0, 2].includes(emptyIndex)) {
    const seed = getRandomNumber(3, 19);
    array[4] = seed;
    array[emptyIndex ? 0 : 2] = getRandomNumber(1, seed - 1);
  }
  if (sign === '-' && [2, 4].includes(emptyIndex)) {
    const seed = getRandomNumber(3, 19);
    array[0] = seed;
    array[emptyIndex === 2 ? 4 : 2] = getRandomNumber(1, seed - 1);
  }
  return array.join(' ');
}

module.exports = generateRandomMathQuiz;
