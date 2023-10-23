// https://leetcode.cn/problems/reverse-linked-list-ii/description/

const LinkList = require("./00手写链表").LinkList;

const list = new LinkList([1, 2, 3, 4, 5, 6, 7, 8]);

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const reverseList = (head, left, right) => {
  if (head?.next === null || right - left === 0) return head;
  const dummy = new ListNode(0, head);
  let p0 = dummy;
  for (let i = 1; i < left; ++i) {
    p0 = p0.next;
  }

  let pre = p0,
    p1 = p0.next,
    next;
  for (let i = left; i <= right; ++i) {
    next = p1.next;
    p1.next = pre;
    pre = p1;
    p1 = next;
  }

  p0.next.next = p1;
  p0.next = pre;
  return dummy.next;
};

console.log(reverseList(list.head, 1, 6));
