// https://leetcode.cn/problems/binary-search/

const nums = [-1, 0, 3, 5, 9, 12];
// 0 6 3 3 
// 3 6 4 4

const target = 9;

// 给的是一个有序列表
// 所以我们需要确定好边界以及中间值
// 当中间值大于target，则收缩有右边
// 当中间值小于target，则收缩左边
// 收缩完再取中间值判断，直到左右两边边界交叉

const search = (nums, target) => {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    console.log(mid);
    const num = nums[mid];

    if (num === target) {
      return mid;
    } else if (num > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
console.log(search(nums, target));
