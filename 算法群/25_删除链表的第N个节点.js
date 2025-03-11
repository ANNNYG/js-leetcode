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

const head = createList([1, 2, 3, 4, 5])

var removeNthFromEnd = function (head, n) {
  let arr = []
  let cur = head
  while (cur) {
    arr.push(cur.val)
    cur = cur.next
  }
  arr.splice(-n, 1)

  let handCur = new ListNode()
  let result = handCur
  while (arr.length) {
    handCur.next = new ListNode(arr.shift())
    handCur = handCur.next
  }
  return result.next

};

const n1 = removeNthFromEnd(head, 2)
console.log(n1)
console.log(n1.next)
console.log(n1.next.next)