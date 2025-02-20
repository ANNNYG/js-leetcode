// https://leetcode.cn/problems/merge-intervals/description/

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]

const merge = function (intervals) {
  const arr = intervals.sort((a, b) => a[0] - b[0])
  const ans = []

  for (let sub of arr) {
    if (ans.length && sub[0] <= ans[ans.length - 1][1]) {
      ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], sub[1])
    } else {
      ans.push(sub)
    }
  }
  return ans
};

console.log(merge(intervals))