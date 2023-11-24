const test = (head) => {
  if (!head) return false;
  let fast = head.next,
    slow = head;

  while (fast && fast.next) {
    if (fast === slow) return true;
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
};
