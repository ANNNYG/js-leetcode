// https://leetcode.cn/problems/product-of-array-except-self/

const nums = [1, 2, 3, 4]

// 思路：创建两个数组，一个lArr和一个rArr，对应坐标记录着当前坐标下的左乘积和右乘积
// 最后将对应坐标的左右乘积相乘就是答案

const productExceptSelf = function (nums) {
  const lArr = new Array(nums.length)
  const rArr = new Array(nums.length)

  const count = new Array(nums.length)

  lArr[0] = 1
  rArr[nums.length - 1] = 1
  for (let i = 1; i < lArr.length; i++) {
    lArr[i] = lArr[i - 1] * nums[i - 1]
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    rArr[i] = rArr[i + 1] * nums[i + 1]
  }

  for (let i = 0; i < count.length; i++) {
    count[i] = rArr[i] * lArr[i]
  }

  return count
};

const productExceptSelf2 = (nums) => {
  let left = 0, right = nums.length - 1
  let lp = 1, rp = 1
  const count = new Array(nums.length).fill(1)

  while (left < nums.length && right >= 0) {
    count[left] *= lp
    count[right] *= rp
    lp *= nums[left++]
    rp *= nums[right--]
  }
  return count

}

console.log(productExceptSelf2(nums))