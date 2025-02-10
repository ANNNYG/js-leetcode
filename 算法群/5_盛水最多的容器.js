// https://leetcode.cn/problems/container-with-most-water/description/

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// const height = [1, 1]
// const height = [8, 7, 2, 1]

// 双指针，记录好最大值，能装多少水取决于最短边，最短边往里收缩，遍历过程中取最大值

var maxArea = function (height) {
  let maxHeight = 0

  let left = 0
  let right = height.length - 1
  while (left < right) {
    const area = Math.min(height[right], height[left]) * (right - left)
    maxHeight = Math.max(maxHeight, area)

    if (height[left] > height[right]) {
      right--
    } else {
      left++
    }
  }
  return maxHeight
};

console.log(maxArea(height))