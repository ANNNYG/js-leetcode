const LinkList = require("./00手写链表").LinkList;

const list = new LinkList([1, 2, 3, 4, 5, 6, 7, 8]);

const reverse1 = (head) => {
  let cur = head;
  let pre = null;
  while (cur && cur.next) {
    [cur.next, pre, cur] = [pre, cur, cur.next];
  }
};

const reverse2 = (head) => {
  let cur = head;
  const tack = [];
  while (cur) {
    tack.push(cur);
    cur = cur.next;
  }

  let pre;

  while (tack.length > 0) {
    const node = tack.shift();
    node.next = pre;
    pre = node;
  }

  return pre;
};

console.log(reverse2(list.head));
