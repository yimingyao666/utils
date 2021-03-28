# utils
一些常用的函数

#### 1.call/apply/bind
#### 2.函数节流与防抖
##### 2.1.函数节流
> 理解：在函数需要频繁触发时，函数执行一次后，只有大于设定的执行周期后才会执行第二次。  
> 场景：窗口滚动（resize）、页面滚动（scroll）、DOM元素的拖拽功能实现（mousemove）、抢购疯狂点击（click）  
> 函数：throttle(callback, wait)
> 功能：创建一个函数，在wait时间段内最多执行一次callback函数
##### 2.2.函数防抖  
> 函数：debounce(callback, wait)
> 功能：创建一个函数，该函数会从上一次执行后，延迟wait时间后再次执行callback