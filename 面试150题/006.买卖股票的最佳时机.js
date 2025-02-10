// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

// 初始状态，要么买入要么不买，即-prices[0]和0,我们
// 每次循环手上现金都会有四个状态：
// 昨天没持有，今天没买 dp[0],
// 昨天没持有，今天买入 -prices[index]
// 昨天持有，今天卖出 dp[1]+prices[index]
// 昨天持有，今天持有 dp[1]

// dp[0]永远是昨天未持有的情况和昨天持有的情况再比
// dp[1]永远是持有的情况在比
// 所以只会存在买卖一次

const prices = [7, 1, 5, 3, 6, 4]

// 输出 5

const fn = (prices) => {
  const len = prices.length
  let index = 1

  const dp = new Array(2).fill(0)

  dp[0] = 0
  dp[1] = -prices[0]

  while (index < len) {
    dp[0] = Math.max(dp[0], dp[1] + prices[index]) // 今天不持有
    dp[1] = Math.max(dp[1], -prices[index]) // 今天持有
    index++
  }
  return Math.max(dp[0], dp[1])
}


// ================

const test = (prices) => {
  let n = prices.length
  let arr = new Array(2)
  arr[0] = 0
  arr[1] = -prices[0]

  for (let i = 0; i < n; i++) {
    arr[0] = Math.max(arr[0], arr[1] + prices[i])
    arr[1] = Math.max(arr[1], -prices[i])
  }
  return arr[0]
}

console.log(test(prices))