// leetcode: https://leetcode.cn/problems/longest-increasing-subsequence/

// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列,删除（或不删除）数组中的元素而不改变其余元素的顺序。
// 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
const nums = [10, 9, 2, 5, 3, 7, 101, 18];

// 动态规划
// 初始化状态
// const dp = new Array(len).fill(1);
// 状态转移方程
// dp[i] = Math.max(dp[i], dp[j] + 1);
// 思路：
// 定义初始化数组dp，数组记录每一项跟之前对比的最长递增子序列的长度
// 两层for循环遍历，比较第i位与前面所有的数字
// 如果第j位的数字比第i位数字小
// dp[j]加上nums[i]就是一种以nums[i]结尾的上升子序列
// 就取dp[j]+1与dp[i]的较大者

const lengthOfLIS = (nums) => {
  const len = nums.length;
  // 初始化状态数组
  const dp = new Array(len).fill(1);
  let ans = 1;
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      // 将第i位与前面所有比较，找到最长的上升子序列
      // 如果第j位的数字比nums[i]小，dp[j]加上nums[i]就是一种以nums[i]结尾的上升子序列，就取dp[j]+1与dp[i]的较大者
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    ans = Math.max(ans, dp[i]);
  }
  return ans;
};
