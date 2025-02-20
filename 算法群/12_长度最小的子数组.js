// https://leetcode.cn/problems/minimum-size-subarray-sum/description/

const target = 11
const nums = [1, 2, 3, 4, 5]

const minSubArrayLen = function (target, nums) {
  let sum = 0
  let left = 0
  let minLength = Infinity

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]
    while (sum >= target) {
      sum -= nums[left]
      minLength = Math.min(minLength, right - left + 1)
      left++
    }
  }
  return minLength === Infinity ? 0 : minLength
};

console.log(minSubArrayLen(target, nums))