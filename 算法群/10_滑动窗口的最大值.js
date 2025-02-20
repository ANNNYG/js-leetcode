// https://leetcode.cn/problems/sliding-window-maximum/

const nums = [1, 3, -1, -3, 5, 3, 6, 7]

const maxSlidingWindow = (nums, k) => {
  let counts = 0

  for (let i = 0; i < (nums.length - k); i++) {
    let subCount = nums[i]
    let index = 1
    while (index < k) {
      subCount += nums[index]
      index++
    }
    counts = Math.max(counts, subCount)
  }
};