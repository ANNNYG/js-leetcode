let user = {
  _name: "Guest",
  get name() {
    console.log('====', this)
    return this._name;
  }
};

let userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    console.log(target)
    return target[prop];
  }
});

let admin = {
  __proto__: userProxy,
  _name: "Admin"
};

// 期望输出：Admin
console.log(admin.name); // 输出：Guest (?!?)