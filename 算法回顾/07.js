const s = "abcabcbb"

var lengthOfLongestSubstring = function (s) {
  const set = new Set()
  let ans = 0
  let right = 0

  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      set.delete(s[i - 1])
    }
    while (!set.has(s[right]) && right < s.length) {
      set.add(s[right])
      right++
    }
    ans = Math.max(ans, right - i)
  }
  return ans
};

console.log(lengthOfLongestSubstring(s))