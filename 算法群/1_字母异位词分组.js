//  https://leetcode.cn/problems/group-anagrams/description/

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

const fn = (strs) => {
  const map = new Map()
  for (let i = 0; i < strs.length; i++) {
    const arr = Array.from(strs[i]).sort()
    const key = arr.toString()
    const list = map.get(key) ? map.get(key) : new Array()
    list.push(strs[i])
    map.set(key, list)
  }
  return Array.from(map.values())
}

const fn1 = (strs) => {
  const map = new Object();
  for (let s of strs) {
    const count = new Array(26).fill(0);
    for (let c of s) {
      count[c.charCodeAt() - 'a'.charCodeAt()]++;
    }
    map[count] ? map[count].push(s) : map[count] = [s];
  }
  return Object.values(map);
}

console.log(fn1(strs))