// 简单的链表
// 用于测试leetcode的链表题目
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkList {
  constructor(arr) {
    this.head = new Node(arr[0]);
    let cur = this.head;
    for (let i = 1; i < arr.length - 1; i++) {
      cur.next = new Node(arr[i]);
      cur = cur.next;
    }
  }

  showLink() {
    let cur = this.head;
    const arr = [];
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }
    let result = arr.join("->");
    console.log(result);
    return result;
  }
}

module.exports = {
  LinkList,
};
