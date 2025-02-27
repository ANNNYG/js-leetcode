// https://leetcode.cn/problems/set-matrix-zeroes/description/

// 给定一个m * n的矩阵，如果一个元素为0，则将其所在行和列的所有元素都设为0。请使用 原地 算法。

// 思路
// 设置一个行映射和列映射的数组，列内出现0，在列映射对应位置设为true，行同理

const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]

var setZeroes = function (matrix) {
  const n = matrix.length, m = matrix[0].length
  const row = new Array(n).fill(false)
  const col = new Array(m).fill(false)

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        row[i] = col[j] = true
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
};

console.log(setZeroes(matrix))