const fun1 = async (ctx, next) => {
  console.log('fun1 start')
  const value = await next()
  console.log('fun1 end', value)
}

const fun2 = async (ctx, next) => {
  console.log('fun2 start')
  const value = await next()
  console.log('fun2 end', value)
  return "fun2 result"
}

const fun3 = async (ctx, next) => {
  console.log('fun3 start')
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
  console.log('fun3 end')
  return 'fun3 result'
}

class Onion {
  tasks = []

  use(task) {
    this.tasks.push(task)
  }

  run() {
    this.dispatch(0)
  }

  async dispatch(i) {
    const fn = this.tasks[i]
    if (!fn) return
    return await fn(this, this.dispatch.bind(this, i + 1))
  }
}

const onion = new Onion()

onion.use(fun1)
onion.use(fun2)
onion.use(fun3)

onion.run()

