const nums = [1, 1, 1]
const k = 2

const subarraySum2 = (nums, k) => {
  const map = new Map()
  map.set(0, 1)
  let count = 0, pre = 0
  for (let num of nums) {
    pre += num
    if (map.has(pre - k)) {
      count += map.get(pre - k)
    }
    if (map.has(pre)) {
      map.set(pre, map.get(pre) + 1);
    } else {
      map.set(pre, 1)
    }
  }
  return count
}

console.log(subarraySum2(nums, k))