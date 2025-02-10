// https://leetcode.cn/problems/longest-consecutive-sequence/description/


// 思路：创建一个set，每次遍历后将值+1，看是否存在于set里，存在的话记录下这个长度

const nums = [100, 4, 200, 1, 3, 2]

var longestConsecutive = function (nums) {
  let ans = 0
  let hashmap = new Set(nums)
  for (const num of hashmap) {
    if (hashmap.has(num - 1)) {
      continue
    }
    let y = num + 1
    while (hashmap.has(y)) {
      y++
    }
    ans = Math.max(ans, y - num)
  }
  return ans

};

console.log(longestConsecutive(nums))