const obj = { a: 1, b: 2 };
obj.__proto__.c = 3
for (let key in obj) {
  console.log(key);  // 输出: "a", "b", "c"
}

const arr = ['a', 'b', 'c'];
for (let value of arr) {
    console.log(value);  // 输出: "a", "b", "c"
}

// 自定义对象实现 Iterator
class Range {
  constructor(start, end) {
      this.start = start;
      this.end = end;
  }

  [Symbol.iterator]() {
      let current = this.start;
      const end = this.end;
      return {
          next() {
              return current <= end 
                  ? { value: current++, done: false }
                  : { done: true };
          }
      };
  }
}

const range = new Range(1, 3);
for (let num of range) {
  console.log(num); // 1, 2, 3
}