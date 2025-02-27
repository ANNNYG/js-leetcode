const s = "cbaebabacd"
const p = "abc"

const findAnagrams = (s, p) => {
  if (s.length < p.length) return []

  const ans = []
  const sCount = new Array(26).fill(0)
  const pCount = new Array(26).fill(0)

  for (let i = 0; i < p.length; i++) {
    pCount[p[i].charCodeAt() - "a".charCodeAt()]++
    sCount[s[i].charCodeAt() - "a".charCodeAt()]++
  }


  if (sCount.toString() === pCount.toString()) {
    ans.push(0)
  }

  for (let i = 0; i < (s.length - p.length); i++) {
    sCount[s[i].charCodeAt() - "a".charCodeAt()]--
    sCount[s[i + p.length].charCodeAt() - "a".charCodeAt()]++
    if (sCount.toString() === pCount.toString()) {
      ans.push(i + 1)
    }
  }

  return ans
}

console.log(findAnagrams(s, p))