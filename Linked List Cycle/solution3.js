/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  try {
    JSON.stringify(head);
    return false;
  } catch (e) {
    return true;
  }
};

module.exports = hasCycle;