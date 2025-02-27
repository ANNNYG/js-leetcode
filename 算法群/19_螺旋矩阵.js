// https://leetcode.cn/problems/spiral-matrix/description/

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]];// 右下左上


var spiralOrder = function (matrix) {
  const row = matrix.length, col = matrix[0].length
  const ans = new Array(row * col)

  let i = 0; j = 0; di = 0;

  for (let k = 0; k < (row * col); k++) {
    ans[k] = matrix[i][j]
    matrix[i][j] = Infinity
    const x = j + DIRS[di][1]
    const y = i + DIRS[di][0]

    if (x < 0 || y >= row || y < 0 || x >= col || matrix[y][x] === Infinity) {
      di = (di + 1) % 4
    }

    i = i + DIRS[di][0]
    j = j + DIRS[di][1]
  }
  return ans
};

console.log(spiralOrder(matrix))