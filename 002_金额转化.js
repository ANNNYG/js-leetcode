// 本人腾讯一面时的算法题
// 金额转化
// 例如：1234567890312 -> 1,234,567,890,312
const num = 1234567890312;

// 字符串解法
const transition = (num) => {
  let str = (num || 0).toString(),
    result = "";

  while (str.length > 3) {
    //此处用数组的slice方法，如果是负数，那么它规定从数组尾部开始算起的位置
    result = "," + str.slice(-3) + result;
    str = str.slice(0, str.length - 3);
  }
  // 如果数字的开头为0,不需要逗号
  if (str) {
    result = str + result;
  }
  return result;
};

// 栈解法
const transition2 = (num) => {
  const arr = num.toString().split("").reverse();
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result = arr[i] + result;
    if ((i + 1) % 3 === 0 && i !== 0) {
      result = "," + result;
    }
  }
  return result;
};

console.log(transition2(num));
