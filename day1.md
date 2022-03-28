# DAY1 Event Loop

## 问题举例

1. 知道eventloop吗，具体说说

2. 说说你项目中的eventloop

3. 解释下异步编程，event loop？

4. 讲讲JS中EventLoop？微任务？宏任务？setTimeout和setInterval是微任务还是宏任务？promise呢？

5. 看输出
   ```
   async function async1() {
     console.log('async1 start');
     await async2();
     console.log('async1 end');
   }
   async function async2() {
     console.log('async2');
   }
   console.log('script start');
   setTimeout(() => {
     console.log('setTimeout');
   }, 0);
   async1();
   new Promise(function (resolve) {
     console.log('promise1');
     resolve();
   }).then(function () {
     console.log('promise2');
   });
   console.log('script end');
   ```

6. Event Loop 执行顺序

   - 首先执行同步代码，这属于宏任务 
   -  当执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行 

   -  执行所有微任务 
   -  当执行完所有微任务后，如有必要会渲染页面 

   -  然后开始下一轮 Event Loop，执行宏任务中的异步代码

7. 宏任务微任务有哪些？          

   -  微任务包括： promise 的回调、node 中的 process.nextTick 、对 Dom 变化监听的 MutationObserver 
   -  宏任务包括： script 脚本的执行、setTimeout ，setInterval ，setImmediate 一类的定时事件，还有如 I/O 操作、UI 渲染等

8. JS是单线程语言，在处理异步事件时有其独特的机制，说一下这个机制。Event Loop

9. 讲了讲有哪些宏任务和微任务，以及它们的循环方式，之后思考对于宏任务和微任务队列的实现方式（给了几个思路，1. 二维数组 2. 哈希散列 3. 数组[链表](https://www.nowcoder.com/jump/super-jump/word?word=链表)）



## 正文

js是单线程语言，一次只能执行一个任务，为了协调事件，用户交互，渲染、网络请求等行为，必须要使用**Event Loops**。同源的窗口共享同一个事件循环，以便进行同步通信。

有两种事件循环 ：一种针对浏览上下文（browsing context）,一种针对worker(web worker)

事件循环有一个或多个**任务队列**（task queue）,需要注意的是**任务队列不是队列，而是集合**

任务封装了以下工作对应的算法：`Events，Parsing，Callbacks，Using a resource，Reacting to DOM manipulation`。具备以下元素：`Steps、A source、A document、A script evaluation environment settings object set`。这里的任务其实就是指我们通常所说的**宏任务**。

每一个任务都来自一个特定的`任务源`（task source）。所有来自一个特定任务源并且属于特定事件循环的任务，通常必须被加入到同一个任务队列中，但是来自不同任务源的任务可能会放在不同的任务队列中。任务源是用来保证同一任务源中的任务的执行顺序，但浏览器可以根据需要（例如出于性能的考虑）来选择一个任务源中的任务进行执行。

每个事件循环都有一个**微任务队列**，初始时该队列为空，微任务队列（microtask queue）不是任务队列。

只要事件循环存在，就必须循环执行以下步骤，也就是事件循环的进程模型：

1. 选择一个任务队列，该任务队列必须至少包含一个可执行任务
2. 将进入任务队列最早的那个任务移出队列，我们把它记为A任务
3. 将A任务标记为Event Loop当前执行任务（还未开始执行）
4. 记录当前时间为该任务的开始时间
5. 执行A任务里的每一个步骤
6. 将null 标记为 Event Loop当前执行任务
7. 检查微任务：进入microtask检查点（performing a microtask checkpoint ）
8. 设置  hasARenderingOpportunity 为false
9. 记录当前时间为任务结束时间
10. 报告该任务持续时间
11. 需要更新渲染则更新
12. 返回第一步



执行进入microtask检查点时，用户代理会执行以下步骤：

> 1. 设置进入microtask检查点的标志为true。
> 2. 当事件循环的微任务队列不为空时：选择一个最先进入microtask队列的microtask；设置事件循环的当前运行任务为已选择的microtask；运行microtask；设置事件循环的当前运行任务为null；将运行结束的microtask从microtask队列中移除。
> 3. 对于相应事件循环的每个环境设置对象（environment settings object）,通知它们哪些promise为rejected。
> 4. 清理indexedDB的事务。
> 5. 设置进入microtask检查点的标志为false。



宏任务与微任务分别有哪些呢？

- `macrotasks`: script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering
- `microtasks`: process.nextTick, Promises, Object.observe(废弃), MutationObserver



总结以下：

js是一门单线程语言，一次只能处理一个任务，因此需要事件循环来协调任务的处理。任务可以分为同步任务和异步任务，同步任务会在js执行栈中按顺序执行，异步任务会在异步任务返回后，将回调函数放入任务队列等待js主线程空闲时按顺序执行。宏任务在标准里指的是task。微任务在微任务队列中排队，每执行完一个宏任务或者一个回调就会执行微任务队列中的任务，并将其全部执行完再进入下一个任务的执行或渲染。在任务执行的中间可能会发生页面的渲染。





## 练一练

### process.nextTick()用法

```javascript
function fn(name){
   return f;

   function f(){
       var n = name;
       console.log("Next TICK "+n+", ");        
   }
}

function myTimeout(time,msg){
   setTimeout(function(){
       console.log("TIMEOUT "+msg);
   },time); 
}

process.nextTick(fn("ONE"));
myTimeout(500,"AFTER-ONE");
process.nextTick(fn("TWO"));
myTimeout(500,"AFTER-TWO");
process.nextTick(fn("THREE"));
myTimeout(500,"AFTER-THREE");
process.nextTick(fn("FOUR"));
```



## 参考文章

### 官方

1. [并发模型与事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop#%E8%BF%90%E8%A1%8C%E6%97%B6%E6%A6%82%E5%BF%B5)
2. [Event loops标准规范](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)

### 博客

1. [快点上车，前端异步编程发车了](https://juejin.cn/post/7051901249083408398)
2. [一次弄懂Event Loop（彻底解决此类面试问题）](https://juejin.cn/post/6844903764202094606?utm_source=gold_browser_extension)
3. [什么是浏览器的事件循环？]()
4. [Tasks, microtasks, queues and schedules]()

