// https://leetcode.cn/problems/jump-game-ii/description/?envType=study-plan-v2&envId=top-interview-150

// 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。
// 每个元素 nums[i] 表示从索引 i 向后跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:
// 0 <= j <= nums[i] 
// i + j < n
// 返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。

// 思路：先找到一个点，可以直接跳到数组末尾，然后往前找到能跳到这个点的位置，以此类推一层层往上找


const nums = [2, 3, 1, 1, 4] // 输出 2

var jump = function (nums) {
  let position = nums.length - 1;
  let steps = 0;
  while (position > 0) {
    
    for (let i = 0; i < position; i++) {
      if (i + nums[i] >= position) {
        position = i;
        steps++;
        break;
      }
    }
  }
  return steps;
};

console.log(jump(nums))