// https://leetcode.cn/problems/reverse-linked-list/

const LinkList = require("./00手写链表").LinkList;

const list = new LinkList([1, 2, 3, 4, 5, 6, 7, 8]);

// 直接转换
const reverseList1 = function (head) {
  let cur = head;
  let pre = null;
  while (cur) {
    [cur.next, cur, pre] = [pre, cur.next, cur];
  }
  return pre;
};

// console.log(reverseList1(list.head));

// 栈方法
// 先把list放入一个栈中，然后一个个出栈，把出栈的元素连成一个新的链表
const reverseList2 = function (head) {
  const tack = [];
  let cur = head;
  while (cur) {
    tack.push(cur);
    cur = cur.next;
  }

  let pre = null;

  while (tack.length > 0) {
    const node = tack.shift();
    node.next = pre;
    pre = node;
  }

  return pre;
};

console.log(reverseList2(list.head));
