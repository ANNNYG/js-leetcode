const num0 = [4, 5, 6, 7, 0, 1, 2];
const num1 = [2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
const num2 = [8, 9, 0, 1, 2, 3, 4, 5, 6, 7];

const search = (nums, target) => {
  if (!nums.length) return -1;

  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) return mid;

    if (nums[left] <= nums[mid]) {
      if (target < nums[left] || target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (target > nums[right] || target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};
