const s = "cabwefgewcwaefgcf"
const t = "cae"

// 判断该字符串包不包含子串



const minWindow = (s, t) => {
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

  let ansRight = s.length, ansLeft = -1

  const cntS = new Array(128).fill(0)
  const cntT = new Array(128).fill(0)
  for (let sub of t) {
    cntT[sub.charCodeAt(0)]++
  }

  let left = 0
  for (let right = 0; right < s.length; right++) {
    cntS[s[right].charCodeAt(0)]++
    while (isCovered(cntS, cntT)) {
      if (right - left < ansRight - ansLeft) {
        ansLeft = left
        ansRight = right
      }
      cntS[s[left].charCodeAt(0)]--
      left++
    }
  }
  return ansLeft < 0 ? "" : s.substring(ansLeft, ansRight + 1)
}

console.log(minWindow(s, t))