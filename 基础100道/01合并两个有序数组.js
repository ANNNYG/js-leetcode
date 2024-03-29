// https://leetcode.cn/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

const merge = (nums1, m, nums2, n) => {
  nums1.splice(m, nums1.length - m, ...nums2.splice(0, n));
  nums1.sort((a, b) => a - b);
};
