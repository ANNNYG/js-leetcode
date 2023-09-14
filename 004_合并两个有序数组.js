// leetcode: https://leetcode.cn/problems/merge-sorted-array/

// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];

// 输出 [1,2,2,3,5,6]

// 暴力拆解
const merge1 = (nums1, nums2) => {
  const arr = [...nums1, ...nums2]
    .filter((value) => !!value)
    .sort((a, b) => a - b);
  return arr;
};

// 快慢指针解法
const merge = (nums1, nums2) => {
  const result = [];
  let i = 0,
    j = 0,
    len = nums1.length + nums2.length - 1;

  while (len > 0) {
    if (nums1[i] < nums2[j] && nums1[i]) {
      result.push(nums1[i]);
      i++;
    } else if (nums1[i] > nums2[j] && nums2[j]) {
      result.push(nums2[j]);
      j++;
    } else if (nums1[i]) {
      result.push(nums1[i]);
      i++;
    } else if (nums2[j]) {
      result.push(nums2[j]);
      j++;
    }
    len--;
  }
  return result;
};

console.log(merge(nums1, nums2));
