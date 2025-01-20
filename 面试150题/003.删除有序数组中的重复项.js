// https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150

// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

// 示例 1：
// 输入：nums = [1,1,1,2,2,3]
// 输出：5, nums = [1,1,2,2,3]
// 解释：函数应该返回新的长度 5 ，并且原数组 nums 的前五个元素被修改为 1, 1, 2, 2, 3 。不需要考虑数组中超出新长度后面的元素。

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]

const fn = (nums) => {
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      if (j - i >= 2) {
        nums.splice(i, 1)
      } else {
        j++
      }
    } else {
      j++
      i++
    }
  }
  return nums.length
}

const fn2 = (nums) => {
  if (nums.length <= 2) {
    return nums.length
  }

  let fast = 2, slow = 2
  while (fast < nums.length) {
    if (nums[slow - 2] !== nums[fast]) {
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }
  return slow

}

