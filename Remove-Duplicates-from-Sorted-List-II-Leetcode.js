/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * @format
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dummy = new ListNode(null, head);
  let start = dummy;
  while (start.next && start.next.next) {
    if (start.next.val === start.next.next.val) {
      let end = start.next;
      while (end.next && end.next.val === start.next.val) {
        end = end.next;
      }
      start.next = end.next;
    } else {
      start = start.next;
    }
  }
  return dummy.next;
};
