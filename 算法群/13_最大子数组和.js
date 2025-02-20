// https://leetcode.cn/problems/maximum-subarray/description/

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

const maxSubArray = function (nums) {
  let maxCount = nums[0]
  let count = 0

  for (let right = 0; right < nums.length; right++) {
    count = Math.max(count + nums[right], nums[right])
    maxCount = Math.max(count, maxCount)
  }
  return maxCount
};

console.log(maxSubArray(nums))