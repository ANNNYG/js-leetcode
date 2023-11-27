// https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/description/

const arr = [3, 4, 5, 1, 2];

// 思路 二分解决思路，但需要注意边界值
// 当中间大于左边的时候，证明最低点一定位于中间的右侧，所以收缩边界的时候可以+1
// 当中间大于右边的时候，右边收缩边界不能+1，以为最小值可能在收缩边界中

const test = (arr) => {
  let high = arr.length - 1;
  let low = 0;
// 9 0 4
// 
  while (low < high) {
    let cur = Math.floor((high - low) / 2) + low;
    if (arr[cur] < arr[high]) {
      high = cur;
    } else {
      low = cur + 1;
    }
  }

  return arr[low];
};

console.log(test(arr));
