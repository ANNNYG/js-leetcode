// https://leetcode.cn/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150

const nums = [2, 3, 1, 1, 4]

var canJump = function (nums) {
  let mx = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > mx) {
      return false
    } else {
      mx = Math.max(mx, i + nums[i])
    }
  }
  return true
};

console.log(canJump(nums))