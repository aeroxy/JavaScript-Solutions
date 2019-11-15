const assert = require('assert');
const lengthOfLongestSubstring = require('./Longest Substring Without Repeating Characters/longest-substring-without-repeating-characters-b');

it('Longest Substring Without Repeating Characters', () => {
  assert.equal(lengthOfLongestSubstring('abcabcbb'), 3);
  assert.equal(lengthOfLongestSubstring('aab'), 2);
  assert.equal(lengthOfLongestSubstring('dvdf'), 3);
  assert.equal(lengthOfLongestSubstring('aabaab!bb'), 3);
});