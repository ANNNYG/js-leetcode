// https://leetcode.cn/problems/happy-number/

//快乐数」 定义为：
// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
// 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
// 如果这个过程 结果为 1，那么这个数就是快乐数。
// 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。

const str = 81;

const getNext = function (n) {
  return n
    .toString()
    .split("")
    .map((i) => i ** 2)
    .reduce((a, b) => a + b);
};

const text = (n) => {
  const tack = new Set();
  let cur = getNext(n);

  while (cur !== 1) {
    if (tack.has(cur)) return false;
    tack.add(cur);
    cur = getNext(cur.next);
  }

  return true;
};
