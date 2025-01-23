// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

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

console.log(fn(prices))