// https://leetcode.cn/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150

// 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

// 贪心算法，记录好数组每个项能跳的最大值，与之前能跳的最大值做对比，当跳的最大值小于指针i的时候，说明不能跳完全部

const nums = [2, 3, 1, 1, 4]
// const nums = [3,2,1,0,4]

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