const fibonacci = (n) => {
  const arr = [0, 1]

  let index = 2
  while (index < n) {
    arr.push(arr[index - 1] + arr[index - 2])
    index++
  }

  return arr
}

const fibonacci2 = (n) => {
  if (n === 1 || n === 2) {
    return 1
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(10))
