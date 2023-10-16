// https://leetcode.cn/problems/happy-number/

//快乐数」 定义为：
// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
// 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
// 如果这个过程 结果为 1，那么这个数就是快乐数。
// 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。

// 思路还是快慢指针判断循环链表那一套
const getNext = function (n) {
  return n
    .toString()
    .split("")
    .map((i) => i ** 2)
    .reduce((a, b) => a + b);
};

const isHappy = function (n) {
  let slow = n;
  let fast = getNext(n);
  console.log(typeof fast);
  while (fast !== 1 && fast !== slow) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return fast === 1;
};

// set解法就简单很多
// 只要set里面有重复元素，就说明已经进死循环了，此时证明不是快乐数
const isHappy2 = function (n) {
  const list = new Set();
  let cur = getNext(n);
  while (cur !== 1) {
    if (list.has(cur)) {
      return false;
    } else {
      list.add(cur);
      cur = getNext(cur);
    }
  }
  return true;
};
