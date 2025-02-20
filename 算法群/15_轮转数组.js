// https://leetcode.cn/problems/rotate-array/
const nums = [1, 2, 3, 4, 5, 6, 7]
const k = 3

const rotate = function (nums, k) {
  const n = nums.length

  const arr = new Array(nums.length)

  for (let i = 0; i < n; i++) {
    arr[(i + k) % n] = nums[i]
  }
  for (let i = 0; i < n; i++) {
    nums[i] = arr[i]
  }
  return nums
};

console.log(rotate(nums, k))