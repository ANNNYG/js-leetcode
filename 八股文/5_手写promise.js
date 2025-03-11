const PADDING = "Padding"
const FULFILLED = "fulfilled"
const REJECTED = 'rejected'

class MyPromise {
  constructor(initFunc) {

    try {
      this.initData()
      initFunc(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }

  initData() {
    this.result = undefined
    this.state = PADDING
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
  }

  resolve(res) {
    queueMicrotask(() => {
      if (this.state === PADDING) this.state = FULFILLED
      this.result = res
      while (this.onFulfilledCallbacks.length) {
        const resolveFn = this.onFulfilledCallbacks.shift()
        resolveFn(this.result)
      }
    })

  }

  reject(res) {
    queueMicrotask(() => {
      if (this.state === PADDING) this.state = REJECTED
      this.result = res
      while (this.onRejectedCallbacks.length) {
        const rejectFn = this.onRejectedCallbacks.shift()
        rejectFn(this.result)
      }
    })
  }

  then(onFulfilled, onRejected) {
    onFulfilled = onFulfilled || (val => val)
    onRejected = onRejected || (reason => reason)

    return new MyPromise((resolve, reject) => {

      if (this.state === FULFILLED) {
        const res = onFulfilled(this.result)
        resolve(res)
      }
      if (this.state === REJECTED) {
        const res = onRejected(this.result)
        reject(res)
      }

      // 为了兼容异步
      if (this.state === PADDING) {
        this.onFulfilledCallbacks.push(() => {
          const res = onFulfilled(this.result)
          resolve(res)
        })
        this.onRejectedCallbacks.push(() => {
          const res = onRejected(this.result)
          reject(res)
        })
      }
    })
  }

  static all(promiseArr) {
    return new MyPromise((resolve, reject) => {
      const values = []
      promiseArr.forEach(promise => {
        promise.then(res => {
          values.push(res)
          if (values.length === promiseArr.length) {
            resolve(values)
          }
        }, err => {
          reject(err)
        })
      });
    })
  }
}

const p1 = new MyPromise((resolve, reject) => {
  resolve('p1')
})
const p2 = new MyPromise((resolve, reject) => {
  reject('p2')
})
const p3 = new MyPromise((resolve, reject) => {
  resolve('p3')
}).then(res => {
  console.log(res)
  return 'p3 1111'
}).then(res => {
  console.log(res)
})

// const result = MyPromise.all([p1, p2, p3]).then(res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })

const t1 = new Promise((_, reject) => {
  reject('t1')
})

const aa = Promise.all([t1]).then(res => console.log(res), err => console.log(err, 'err'))
