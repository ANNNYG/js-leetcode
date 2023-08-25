// leetcode:https://leetcode.cn/problems/longest-palindromic-substring/description/
// 给你一个字符串 s，找到 s 中最长的回文子串。
// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

// 示例 1：
// 输入 babad
// 输出 bab 或者 aba 两者都是符合题意的答案

// 示例 2：
// 输入 cbbd
// 输出 bb

// 实例 3：
// 输入 abccbadd
// 输出 abccba

var longestPalindrome = function (s) {
  let n = s.length; // 字符串长度
  let res = "";
  let dp = Array.from(new Array(n), () => new Array(n).fill(false)); //初始化数组二维数组

  for (let i = n - 1; i >= 0; i--) {
    //循环字符串
    for (let j = i; j < n; j++) {
      //dp[i][j]表示子串i～j是否是回文子串
      //回文子串必须满足s[i]，s[j]相等。并且向外扩展一个字符也相等，即dp[i+1][j-1]也是回文子串
      //j - i < 2表示子串小于等于1也是回文串
      dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        //当前回文子串比之前的大，更新最大长度
        res = s.substring(i, j + 1);
      }
      console.log(dp);
    }
  }
  return res;
};

// 思路
// 1.动态规划
// 定义两个变量i和j，找到与i相等的j
// 然后判断i和j之间的字符串是否是回文字符串（abba）形式
// 或者判断i和j之间距离是不是小于2（aba）形式

// 状态转移方程 dp[i][j] = str[i] === str[j] && (j - i < 2 || dp[i + 1][j - 1])
// dp[i + 1][j - 1]用于判断i和j之间的字符串是否是回文字符串 例如（abba）形式 i=0 j=3时
// j - i < 2 用于判断两个相等的值中间是不是只隔着一个字符串 例如 aba
// str[i] === str[j] 用于判断值是不是相等
// 符合所有条件才是回文字符串

// 当abccba i=0 j=5时
// 因为i=1 j=4的时候判断过 i=2 j=3的数字是不是符合回文字符串的条件
// 可以理解为 每一步都依赖上一步的判断结果，所以是动态规划

const str = "abccbac";
console.log(longestPalindrome(str));
