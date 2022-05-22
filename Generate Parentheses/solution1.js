function valid(current) {
  let balance = 0;
  for (let character of current) {
    if (character === '(') {
      balance++;
    } else {
      balance--;
    }
    if (balance < 0) {
      return false;
    }
  }
  return (balance === 0);
}

function generateAll(stringLength, current, index, result) {
  if (index === stringLength) {
    if (valid(current)) {
      result.push(current.join(''));
    }
  } else {
    if (index !== stringLength - 1) {
      current[index] = '(';
      generateAll(stringLength, current, index + 1, result);
    }
    if (index) {
      current[index] = ')';
      generateAll(stringLength, current, index + 1, result);
    }
  }
}

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const stringLength = n * 2;
  const result = [];
  generateAll(stringLength, new Array(stringLength), 0, result);
  return result;
};

module.exports = generateParenthesis;
