// https://leetcode.cn/problems/trapping-rain-water/

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

// 思路：双指针，右边能装多少取决于右边的最大值，左边同理

var trap = function (height) {
  let ans = 0
  let leftMax = 0
  let left = 0
  let right = height.length - 1
  let rightMax = 0

  while (left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    if (height[left] < height[right]) {
      ans += leftMax - height[left]
      left++
    } else {
      ans += rightMax - height[right]
      right--
    }
  }
  return ans
};

console.log(trap(height))