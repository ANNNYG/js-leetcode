// https://leetcode.cn/problems/linked-list-cycle-ii/submissions/

// 快慢指针解法
// 首先先判断这个链表存不存在环
// 如果存在环的话 设置一个变量ptr
// 通过数学计算可以得到 "相遇点到入环口"与"链头到入环口"的路径相同
// 所以只需要ptr走一步，slow指针走一步，直到两者相遇
var detectCycle = function (head) {
  if (head === null) return null;
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }
  return null;
};

// set解法
// 根据set的特性（里面元素不重复） 当set里面有相同节点的时候，则为环的入口
var detectCycle2 = function (head) {
  let cur = head;
  const list = new Set();
  while (cur !== null) {
    if (list.has(cur)) {
      return cur;
    }
    list.add(cur);
    cur = cur.next;
  }
  return null;
};
