const test = (head) => {
  const tack = new Set();
  let cur = head;
  while (cur && cur.next) {
    if (tack.has(cur)) return cur;
    tack.add(cur);
    cur = cur.next;
  }
  return null;
};
