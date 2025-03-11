// https://leetcode.cn/problems/intersection-of-two-linked-lists/description/


function ListNode(val) {
  this.val = val;
  this.next = null;
}

// set解法
var getIntersectionNode = function (headA, headB) {
  const set = new Set()

  let pA = headA
  let pB = headB
  while (pA) {
    set.add(pA)
    pA = pA.next()
  }

  while (pB) {
    if (set.has(pB)) {
      return pB
    }
    pB = pB.next()
  }
  return null
};

// 双指针解法

var getIntersectionNode2 = function (headA, headB) {
  if (!headA || !headB) return null

  let pa = headA
  let pb = headB

  while (pa !== pb) {
    pa = pa === null ? headB : pa.next
    pb = pb === null ? headA : pb.next
  }
  return pa
}

