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
  1.apply函数
  参数：fn、obj、参数为数组;
  功能：执行fn，使this为obj，并将后面的n个参数传递给fn
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