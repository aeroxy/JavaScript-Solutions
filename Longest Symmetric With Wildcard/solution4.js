/**
 * Returns the maximum number of consecutive pairs of angle brackets that can be formed
 * by replacing question marks in a given string.
 *
 * @param {string} S - The input string.
 * @return {number} - The maximum number of consecutive pairs of angle brackets.
 */
function solution(S) {
  let leftCount = 0; // number of '<' characters seen so far
  let rightCount = 0; // number of '>' characters seen so far
  let questionCount = 0; // number of '?' characters seen so far
  let isLeft = true; // true if the last seen character was '<'
  let maxPairs = 0; // the maximum number of consecutive pairs of angle brackets found so far
  let lastQuestionsCount = 0; // number of '?' characters seen after the last '>'

  // Helper function to calculate the number of consecutive pairs of angle brackets that can be formed
  // given the current counts of '<', '>', and '?' characters.
  const calculatePairs = () => {
    const pairs = Math.min(leftCount, rightCount); // number of complete pairs of angle brackets
    const remainingLeftCount = leftCount - pairs; // number of '<' characters not paired with '>'
    const remainingRightCount = rightCount - pairs; // number of '>' characters not paired with '<'
    if (remainingLeftCount > questionCount) {
      maxPairs = Math.max(maxPairs, pairs + questionCount); // update maxPairs with the maximum number of complete pairs possible
    } else {
      const remainingQuestionsCount = questionCount - remainingLeftCount; // number of '?' characters not paired with '<'
      maxPairs = Math.max(maxPairs, pairs + remainingLeftCount + Math.floor(remainingQuestionsCount / 2)); // update maxPairs with the maximum number of complete pairs possible
    }
  };

  // Process each character in the input string
  for (let i = 0; i < S.length; i++) {
    const c = S.charAt(i);
    if (c === "?") {
      if (isLeft) {
        questionCount++; // increment the number of '?' characters seen
        calculatePairs(); // calculate the maximum number of consecutive pairs of angle brackets
      } else {
        rightCount++; // increment the number of '>' characters seen
        lastQuestionsCount++; // increment the number of '?' characters seen after the last '>'
        calculatePairs(); // calculate the maximum number of consecutive pairs of angle brackets
      }
    } else if (c === "<") {
      if (isLeft) {
        leftCount++; // increment the number of '<' characters seen
        leftCount += questionCount; // add the number of '?' characters seen to the number of '<' characters
        questionCount = 0; // reset the number of '?' characters seen
      } else {
        isLeft = true; // switch to processing '<' characters
        leftCount = 0; // reset the counts of '<' and '>' characters
        rightCount = 0;
        questionCount = lastQuestionsCount; // use the number of '?' characters seen after the last '>' as the starting count for the new sequence
        calculatePairs(); // calculate the maximum number of consecutive pairs of angle brackets
        leftCount = 1 + questionCount; // start the new sequence with a single '<' character followed by any remaining '?' characters
        questionCount = 0; // reset the number of '?' characters seen
      }
    } else if (c === ">") {
      if (isLeft) {
        isLeft = false; // switch to processing '>' characters
        rightCount++; // increment the number of '>' characters seen
        calculatePairs(); // calculate the maximum number of consecutive pairs of angle brackets
      } else {
        rightCount++; // increment the number of '>' characters seen
        calculatePairs(); // calculate the maximum number of consecutive pairs of angle brackets
      }
    }
  }

  // Process any remaining '?' characters at the end of the string
  leftCount = 0;
  rightCount = 0;
  questionCount = lastQuestionsCount;
  calculatePairs();

  // Return the maximum number of consecutive pairs of angle brackets found, multiplied by 2
  return maxPairs * 2;
}

module.exports = solution;