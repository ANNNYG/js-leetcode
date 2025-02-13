// https://leetcode.cn/problems/subarray-sum-equals-k/description/

const nums = [1, 1, 1]
const k = 2

// 暴力解法
const subarraySum = function (nums, k) {
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum === k) {
        count++
      }
    }
  }
  return count
};

// 思路：因为要找的是连续数组，所以设定一个map，每次遍历将值累加，获取前缀和（即前面所有项加起来的和）
// 当前缀和-k的值在map里面有的话，说明前缀和在map的位置到当前位置是一个符合条件的连续数组
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