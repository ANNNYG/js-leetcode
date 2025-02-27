const testObj = {
  name: 'testObj'
}

const _call = function (context, ...args) {
  context = context || window
  const fn = Symbol('fn');
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}

const _bind = function (context, ...args1) {
  const self = this
  return function F(...args2) {
    if (this instanceof F) {
      return new self([...args1, ...args2])
    }
    return self._call(context, [...args1, ...args2])
  }
}

Function.prototype._call = _call
Function.prototype._bind = _bind

const testFunc = function () {
  return this.name
}

function Person() {
  this.callName = 'Person'
}

const fn1 = testFunc._bind(testObj)

const Person1 = Person._bind(testObj)
const Person2 = Person.bind(testObj)

const person1 = new Person()
const person2 = new Person()

console.log(testFunc._call(testObj)) // testObj
console.log(fn1()) // testObj

console.log(person1) // Person { callName: 'Person' }
console.log(person2) // Person { callName: 'Person' }



