// https://leetcode.cn/problems/minimum-window-substring/description/
// 思路
// 双指针找到包含这个子串t的字符串，然后在这个字符串中一直缩短边界，直到子串t不在字符串中，再继续移动right指针
// 找到包含t的字符串后再继续移动left指针缩短边界，同时要创建两个变量去存储最短的字符串头和尾缩影

const s = "cabwefgewcwaefgcf"
const t = "cae"

// 判断该字符串包不包含子串
function isCovered(cntS, cntT) {
  for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    if (cntS[i] < cntT[i]) {
      return false;
    }
  }
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    if (cntS[i] < cntT[i]) {
      return false;
    }
  }
  return true;
}

const minWindow = (s, t) => {
  let antLeft = -1, antRight = s.length

  const cntS = new Array(128).fill(0)
  const cntT = new Array(128).fill(0)
  for (let sub of t) {
    cntT[sub.charCodeAt(0)]++
  }

  let left = 0
  for (let right = 0; right < s.length; right++) {
    cntS[s[right].charCodeAt(0)]++
    while (isCovered(cntS, cntT)) {
      // right - left为包含t子串的长度
      // antRight - antLeft 包含t子串的最小长度
      if (right - left < antRight - antLeft) {
        antLeft = left
        antRight = right
      }
      cntS[s[left].charCodeAt()]--
      left++
    }
  }
  return antLeft < 0 ? "" : s.substring(antLeft, antRight + 1);
};


console.log(minWindow(s, t))
