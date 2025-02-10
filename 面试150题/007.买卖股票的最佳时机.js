// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150

// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
// 返回 你能获得的 最大 利润 。

// 思路
// 定义一个数组，arr[0]记录为当天卖出股票后剩余的钱，arr[1]为买入股票剩余的钱
// 贪心算法，求出每天卖出股票剩余的钱（arr[0]）和每天买入股票剩余的钱（arr[1]）跟历史去比取最大值
// 开始状态：开始不买，开始买
// 中间状态：今天持有，今天卖出，今天买入


const prices = [7, 1, 5, 3, 6, 4]
// 输出 7

const fn = (prices) => {
  const len = prices.length
  let index = 1
  const arr = new Array(2).fill(0)
  arr[0] = 0
  arr[1] = -prices[0]

  while (index < len) {
    arr[0] = Math.max(arr[0], arr[1] + prices[index])
    arr[1] = Math.max(arr[1], arr[0] - prices[index])

    index++
  }
  return Math.max(arr[0], arr[1])
}

console.log(fn(prices))