//  https://leetcode.cn/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。


const nums = [3, 2, 3, 3, 2, 1, 3]

const fn = (nums) => {
  const n = Math.floor(nums.length / 2)
  return nums.sort((a, b) => a - b)[n]
}

console.log(fn(nums))