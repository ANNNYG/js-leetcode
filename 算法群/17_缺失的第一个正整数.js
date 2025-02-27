const nums = [3, 4, -1, 1]

const firstMissingPositive = function (nums) {
  function swip(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  let n = nums.length;
  for (let i = 0; i < n;) {
    let index = nums[i];
    if (index > 0 && index <= n && i !== index - 1 && index !== nums[index - 1]) {
      swip(nums, i, index - 1)
    } else {
      i++
    }
  }

  for (let i = 0; i < n; i++) {
    // 下标没有对应上，直接返回i+1为最小正整数
    if (i + 1 !== nums[i]) {
      return i + 1;
    }
  }
  return n + 1
};

console.log(firstMissingPositive(nums))