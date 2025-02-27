const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

var searchMatrix = function (matrix, target) {
  const m = matrix.length, n = matrix[0].length

  let y = 0, x = n - 1
  while (x >= 0 && y < m) {
    const num = matrix[y][x]
    if (num === target) {
      return true
    } else if (num > target) {
      x--
    } else {
      y++
    }
  }
  return false
};

console.log(searchMatrix(matrix, 5))