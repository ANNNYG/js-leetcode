const str = "abccbac";

const test = (str) => {
  let n = str.length;
  let result = "";
  let dp = Array.from(new Array(n), () => new Array(n).fill(false));

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = str[i] === str[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > result.length) {
        result = str.substring(i, j + 1);
      }
    }
  }

  return result;
};

console.log(test(str));
