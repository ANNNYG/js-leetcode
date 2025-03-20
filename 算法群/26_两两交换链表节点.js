
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


const head = createList([1, 2, 3, 4])


const swapPairs = function (head) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head
  let temp = dummyHead
  while (temp.next && temp.next.next) {
    const node1 = temp.next
    const node2 = temp.next.next
    temp.next = node2;
    node1.next = node2.next
    node2.next = node1

    temp = node1
  }
  return dummyHead.next
};

console.log(swapPairs(head))
