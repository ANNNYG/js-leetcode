const fun1 = async (ctx, next) => {
  console.log('fun1 start', ctx)
  const value = await next()
  console.log('fun1 end', value)
}

const fun2 = async (ctx, next) => {
  console.log('fun2 start', ctx)
  const value = await next()
  console.log('fun2 end', value)
  return "fun2 result"
}

const fun3 = async (ctx, next) => {
  console.log('fun3 start', ctx)
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
  console.log('fun3 end')
  return 'fun3 result'
}

class Onion {
  constructor(params) {
    this.middleware = [];
  }

  use(fn) {
    this.middleware.push(fn)
  }

  async run() {
    await this.dispatch(0)
  }

  async dispatch(i) {
    const fn = this.middleware[i]
    if (!fn) return
    return await fn(this, this.dispatch.bind(this, i + 1))
  }
}

const onion = new Onion()

onion.use(fun1)
onion.use(fun2)
onion.use(fun3)

onion.run()

