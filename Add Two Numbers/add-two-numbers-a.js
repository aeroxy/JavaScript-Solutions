/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const add = (str1, str2) => {
  let sum = '';
  if (str2.length > str1.length) {
    let temp = str2;
    str2 = str1;
    str1 = temp;
  }
  let carry = 0;
  let a, b, temp, digitSum;
  for (let i = 0; i < str1.length; ++i) {
    a = parseInt(str1.charAt(str1.length - 1 - i));
    b = parseInt(str2.charAt(str2.length - 1 - i));
    b = b ? b : 0;
    temp = (carry + a + b).toString();
    digitSum = temp.charAt(temp.length - 1);
    carry = parseInt(temp.substr(0, temp.length - 1));
    carry = carry ? carry : 0;
    sum = (i === str1.length - 1) ? temp + sum : digitSum + sum;
  }
  return sum;
}

const getNumberFromNodes = (nodes, array = []) => {
  array.unshift(nodes.val);
  if (nodes.next !== null) {
    return getNumberFromNodes(nodes.next, array);
  } else {
    return array.join('');
  }
}

const getNodesFromNumber = number => {
  const array = number.split('');
  let nodes = {};
  for (let i = 0; i < array.length; ++i) {
    nodes.val = array[i];
    if (i === array.length - 1) {
      return nodes;
    } else {
      nodes.next = Object.assign({}, nodes);
    }
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const number = add(getNumberFromNodes(l1), getNumberFromNodes(l2));
  return getNodesFromNumber(number);
};
/**
 * 120 ms
 * 40.8 MB
 */