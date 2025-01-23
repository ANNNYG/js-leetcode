// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150

const prices = [7, 1, 5, 3, 6, 4]

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