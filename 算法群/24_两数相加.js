// https://leetcode.cn/problems/add-two-numbers/description/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function createList(arr) {
  let head = new ListNode(arr[0], arr[1])
  let cur = head
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i], arr[i + 1])
    cur = cur.next
  }
  return head
}

let l1 = createList([2, 4, 3]), l2 = createList([5, 6, 4])


const addTwoNumbers = function (l1, l2) {
  let count = 0
  let head = null, cur = null

  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0
    const n2 = l2 ? l2.val : 0
    const sum = n1 + n2 + count

    if (!head) {
      head = cur = new ListNode(sum % 10)
    } else {
      cur.next = new ListNode(sum % 10)
      cur = cur.next
    }
    count = Math.floor(sum / 10);
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }

  if (count > 0) {
    cur.next = new ListNode(count)
  }
  return head
};

const cur = addTwoNumbers(l1, l2)