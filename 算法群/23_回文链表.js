var isPalindrome = function (head) {
  const arr = []
  let cur = head
  while (cur) {
    arr.push(cur)
    cur = head.next
  }

  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) {
      return false
    }
  }
  return true
};