// https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/

const s = "cbaebabacd"
const p = "abc"

// 暴力解法
const findAnagrams = (s, p) => {
  const count = new Array(26).fill(0)

  for (let i = 0; i < p.length; i++) {
    count[p[i].charCodeAt() - "a".charCodeAt()]++
  }
  const str = count.toString()
  const arr = []
  for (let i = 0; i < s.length; i++) {
    const handleArr = new Array(26).fill(0)
    const subStr = s.slice(i, i + p.length)
    for (let subChar of subStr) {
      handleArr[subChar.charCodeAt() - "a".charCodeAt()]++
    }
    if (handleArr.toString() === str) arr.push(i)
  }
  return arr
};

const findAnagrams2 = (s, p) => {
  if (s.length < p.length) return []

  const pCount = new Array(26).fill(0)
  const sCount = new Array(26).fill(0)

  const indexArr = []

  for (let i = 0; i < p.length; i++) {
    pCount[p[i].charCodeAt() - "a".charCodeAt()]++
    sCount[s[i].charCodeAt() - "a".charCodeAt()]++
  }

  if (sCount.toString() === pCount.toString()) {
    indexArr.push(0)
  }

  for (let i = 0; i < (s.length - p.length); i++) {
    sCount[s[i].charCodeAt() - "a".charCodeAt()]--
    sCount[s[i + p.length].charCodeAt() - "a".charCodeAt()]++
    if (sCount.toString() === pCount.toString()) {
      indexArr.push(i + 1)
    }
  }

  return indexArr
}



console.log(findAnagrams2(s, p))