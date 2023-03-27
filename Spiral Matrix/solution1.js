/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  const maxLength = matrix.length * matrix[0].length;
  let row = 0;
  let col = 0;
  let direction = 'right';
  result = [];
  while (result.length < maxLength) {
    if (matrix[row][col] !== undefined) {
      result.push(matrix[row][col]);
      matrix[row][col] = undefined;
    }
    
    if (direction === 'right') {
      if (matrix[row][col + 1] === undefined) {
        direction = 'down';
      } else {
        ++col;
      }
    }

    if (direction === 'down') {
      if (matrix[row + 1]?.[col] === undefined) {
        direction = 'left';
      } else {
        ++row;
      }
    }

    if (direction === 'left') {
      if (matrix[row][col - 1] === undefined) {
        direction = 'up';
      } else {
        --col;
      }
    }

    if (direction === 'up') {
      if (matrix[row - 1]?.[col] === undefined) {
        direction = 'right';
      } else {
        --row;
      }
    }
  }

  return result;
}

module.exports = spiralOrder;