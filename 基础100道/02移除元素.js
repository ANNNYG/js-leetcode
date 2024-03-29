// https://leetcode.cn/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

const removeElement = (nums, val) => {
  let start = 0;
  while (start < nums.length) {
    if (nums[start] === val) {
      nums.splice(start, 1);
    } else {
      start++;
    }
  }
};

removeElement([3, 2, 2, 3], 3);
