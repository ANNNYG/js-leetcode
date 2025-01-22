// https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150
// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

const nums = [1, 2, 3, 4, 5, 6, 7], k = 3;

// 超出时间限制
const fn = (nums, k) => {
  let j = 0
  while (j < k) {
    const num = nums.pop()
    nums.unshift(num)
    j++
  }
  return nums
}

const fn2 = () => {
  const n = nums.length;
  const newArr = new Array(n);
  for (let i = 0; i < n; ++i) {
    newArr[(i + k) % n] = nums[i];
  }
  for (let i = 0; i < n; ++i) {
    nums[i] = newArr[i];
  }
}

console.log(fn(nums, k))
