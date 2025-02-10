// https://leetcode.cn/problems/3sum/description/

// 思路：暴力解法三层循环直接解

const nums = [-1, 0, 1, 2, -1, -4]

// 暴力解法
var threeSum = function (nums) {
  let arr = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          arr.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }

  const set = new Set()
  for (const subArr of arr) {
    set.add(JSON.stringify(subArr.sort()))
  }
  return Array.from(set).map(item => JSON.parse(item))
};

// 思路：双指针+嵌套遍历

// 双指针解法
const threeSum2 = (nums) => {
  let arr = []
  const sortNums = nums.sort()
  for (let i = 0; i < sortNums.length; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue // 去除重复
    let left = i + 1
    let right = sortNums.length - 1

    while (left < right) {
      const sum = sortNums[i] + sortNums[left] + sortNums[right]
      if (sum === 0) {
        arr.push([sortNums[i], sortNums[left], sortNums[right]])
        while (sortNums[left] === sortNums[left + 1]) left++ // 去除重复
        while (sortNums[right] === sortNums[right - 1]) right-- // 去除重复
        left++
        right--
      }
      else if (sum < 0) left++
      else if (sum > 0) right--
    }
  }
  return arr
}

console.log(threeSum2(nums))