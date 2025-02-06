// https://leetcode.cn/problems/longest-consecutive-sequence/description/


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