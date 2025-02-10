// https://leetcode.cn/problems/move-zeroes/description/

// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

const nums = [0, 1, 0, 3, 12]

// 滚雪球解法
const moveZeroes = function (nums) {
  let snowSize = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      snowSize++
    } else if (snowSize > 0) {
      const t = nums[i]
      nums[i] = 0
      nums[i - snowSize] = t
    }
  }
  return nums
};

// 快慢指针解法
const moveZeroes2 = (nums) => {
  let slow = 0, fast = 0
  while (fast < nums.length) {
    if (nums[fast]) {
      const t = nums[slow]
      nums[slow] = nums[fast]
      nums[fast] = t
      slow++
    }
    fast++
  }
  return nums
}

console.log(moveZeroes2(nums))