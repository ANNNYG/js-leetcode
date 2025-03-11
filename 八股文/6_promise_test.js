const PADDING = "padding"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"

class MyPromise {
  state = 'padding'
  result = undefined
  onFulfilledTasks = []
  onRejectedTasks = []

  constructor(fn) {
    fn(this.resolve.bind(this), this.reject.bind(this))
  }

  resolve(value) {
    queueMicrotask(() => {
      if (this.state !== PADDING) return
      this.state = FULFILLED
      this.result = value
      while (this.onFulfilledTasks.length) {
        const fn = this.onFulfilledTasks.shift()
        fn(this.result)
      }
    })
  }

  reject(value) {
    queueMicrotask(() => {
      if (this.state !== REJECTED) return
      this.state = REJECTED
      this.result = value
      while (this.onRejectedTasks.length) {
        const fn = this.onRejectedTasks.shift()
        fn(this.result)
      }
    })
  }

  then(onFulfilled, onRejected) {
    onFulfilled = onFulfilled || (onFulfilled => onFulfilled)
    onRejected = onRejected || (onRejected => onRejected)

    return new MyPromise((resolve, reject) => {
      // if (this.state === FULFILLED) {
      //   const value = onFulfilled(this.result)
      //   resolve(value)
      // }

      // if (this.state === REJECTED) {
      //   const value = onRejected(this.result)
      //   reject(value)
      // }

      if (this.state === PADDING) {
        this.onFulfilledTasks.push(() => {
          const value = onFulfilled(this.result)
          resolve(value)
        })
        this.onRejectedTasks.push(() => {
          const value = onRejected(this.result)
          reject(value)
        })
      }
    })
  }

  static all(promiseArr) {
    const result = []
    return new Promise((resolve, reject) => {
      promiseArr.forEach((promise) => {
        promise.then(res => {
          result.push(res)
          if (result.length === promiseArr.length) {
            resolve(result)
          }
        }, err => {
          reject(err)
        })
      })
    })
  }
}

const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => { resolve("1111") }, 1000)
})
  .then(res => {
    console.log(res)
    return "222"
  })
  .then(res => {
    console.log(res)
  })




