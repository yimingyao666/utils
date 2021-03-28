/* 
  1.call函数
  参数：fn、obj、n个参数;
  功能：执行fn，使this为obj，并将后面的n个参数传递给fn
  globalThis: 提供了一个标准的方式来获取不同环境下的全局 this  对象（也就是全局对象自身）
*/
function call(fn, obj, ...args) {
  // obj判断
  if(obj === undefined || obj === null) {
    obj = globalThis;
  }
  // 为obj添加临时方法
  obj.temp = fn;
  // 调用该方法
  let res = obj.temp(...args);
  // 删除临时方法
  delete obj.temp;
  // 返回结果
  return res;
}

/* 
  2.apply函数
  参数：fn、obj、参数为数组;
  功能：执行fn，使this为obj，并将数组中的元素传递给fn
  globalThis: 提供了一个标准的方式来获取不同环境下的全局 this  对象（也就是全局对象自身）
*/
function apply(fn, obj, args) {
  // obj判断
  if(obj === undefined || obj === null) {
    obj = globalThis;
  }
  // 为obj添加临时方法
  obj.temp = fn;
  // 调用该方法
  let res = obj.temp(...args);
  // 删除临时方法
  delete obj.temp;
  // 返回结果
  return res;
}

/* 
  3.bind函数
  参数：fn、obj、n个参数;
  功能：执行fn，使this为obj，并指定参数为后面n个参数
  globalThis: 提供了一个标准的方式来获取不同环境下的全局 this  对象（也就是全局对象自身）
*/
function bind(fn, obj, ...args) {
  // 返回函数
  return function(...args2) {
    return call(fn, obj, ...args, ...args2)
  }
}

/* 
  4.函数节流
*/
function throttle(callback, wait) {
  // 定义开始时间
  let start = 0;
  // 返回结果
  return function() {
    // 获取当前时间
    let now =  Date.now();
    // 判断条件
    if(now - start >= wait) {
      // 若满足条件，执行函数
      callback && callback();
      // 设置开始时间
      start = now;
    }
  }
}

/* 
  5.函数防抖
*/
function debounce(callback, wait) {
  // 设置定时器
  let timeTemp = null;
  // 返回结果
  return function(e) {
    // 判断
    if(timeTemp !== null) {
      // 清空定时器
      clearTimeout(timeTemp)
    }
    // 执行定时器
    timeTemp = setTimeout(() => {
      // 执行函数
      callback.call(this, e);
      // 重新设置定时器
      timeTemp = null;
    }, wait)
  }
}