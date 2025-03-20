// https://leetcode.cn/problems/binary-tree-inorder-traversal/description/

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const left1 = new TreeNode(3)
const left2 = new TreeNode(4)
const left = new TreeNode(5, left1, left2)
const right1 = new TreeNode(2)
const right = new TreeNode(1, undefined, right1)
const root = new TreeNode(0, left, right)


var inOrderTraversal = function (root) {
  const result = []

  const inOrder = (root) => {
    if (!root) return
    inOrder(root.left)
    result.push(root.val)
    inOrder(root.right)
  }
  inOrder(root)
  return result
};

const inOrderTraversal2 = (root) => {
  const stk = []
  const result = []

  while (root || stk.length) {
    while (root) {
      stk.push(root)
      root = root.left
    }
    root = stk.pop()
    result.push(root.val)
    root = root.right
  }
  return result
}

console.log(inOrderTraversal2(root))

