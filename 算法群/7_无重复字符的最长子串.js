// https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/

// const s = "abccabcbb"

// 思路：设置一个set，当制定两个指针，两个指针形成的范围就是单词边界
// 当set没有重复字符的时候往往右移动扩大单词边界，有重复字符的时候左边往右移动缩短边界

const s = "dvdf"

var lengthOfLongestSubstring = function (s) {
  const occ = new Set();
  const n = s.length;

  let right = 0
  let ans = 0
  for (let i = 0; i < n; i++) {
    if (i !== 0) {
      occ.delete(s[i - 1])
    }
    while (right < n && !occ.has(s[right])) {
      occ.add(s[i])
      right++
    }
    ans = Math.max(ans, right - i)
  }
  return ans
};

console.log(lengthOfLongestSubstring(s))