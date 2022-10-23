# 回顾知识

## 1.JS基础

### 1.浅拷贝&深拷贝

**深拷贝:将一个对象从内存空间中完整的拷贝一份,从堆内存中开辟一个新的区域进行存放,新旧对象存放地址地址,更改新对象不会影响旧对象**

**浅拷贝:**

- 基本类型:拷贝的是基本类型的值
- 引用类型:拷贝的内存地址,改变会相互影响

**赋值:将一个对象复制给一个新变量时,赋的是地址,两个对象指向同一个存储空间**

**拷贝构造函数:浅拷贝**

```js
 const obj3 = obj1
    obj3.name = '刘德华' //赋值,浅拷贝
    console.log('obj1',obj1)
    console.log('obj3',obj3)

**扩展运算符:**
    const obj4 = {...obj2}
    obj4.name = '李宗盛' //赋值,深拷贝
    console.log('obj4',obj4);
    console.log('obj2',obj2);


obj1 {name: '刘德华', age: 20}
obj3 {name: '刘德华', age: 20}
obj4 {name: '李宗盛', age: 18}
obj2 {name: '李四', age: 18}
```



**栈内存**:

**堆内存**:



### 2.构造函数调用模式

构造函数调用模式的特征：

1. 构造函数的首字母一般要大写
2. 一般情况下和关键字 `new` 一起使用
3. 构造函数中的 `this` 指向 `new` 关键字创建出来的实例对象
4. 默认返回 `new` 创建出来的这个对象（`this`）

**函数或者方法调用之前带有关键字 `new`，就构成构造函数调用**

```js
function fn(){
  this.a = 1;
};

const obj = new Fn();

console.log(obj.a);
//	1

//Fn为构造函数
//obj为实例对象
```

**构造函数特点:**

- 构造函数首字母一般大写,用于区分普通函数
- 使用`new`关键字生成实例对象



### 3.call,apply,bind

```js
fun.call(thisArg, param1, param2, ...)
fun.apply(thisArg, [param1,param2,...])
fun.bind(thisArg, param1, param2, ...)
```

**call与apply的区别:**

- `call()`接受的是**一个参数列表**
- `apply()`接受的是**一个包含多个参数的数组**

**`apply`是以`a`开头，它传给`fun`的参数是`Array`，也是以`a`开头的**

**call/apply与bind的区别:**

- `call/bind`改变了 函数的this上下文后**马上执行函数**
- `bind`返回改变了上下文后的函数,**不执行该函数**

#### 1.call

**传递参数类型,直接返回调用结果**



## 2.函数

#### 1.惰性函数

**本质:函数重写**

**惰性载入:函数执行的分支只会在函数第一次调用的时候执行,，之后调用函数时，直接进入所支持的分支代码**

#### 2.函数重写

**一个函数可以返回另一个函数,可以用新的函数来覆盖旧的函数**

#### 3.级联函数(链式函数)

**在一个对象上使用一条连续的代码来重复调用不停方法的技巧**

**实现:只需要在每个函数中返回 `this` 对象**

#### 4.回调函数

**作为一个参数传递给其他代码(eg:函数)**

回调函数是一个**闭包**,它能访问到外层定义的变量

`this`指向调用它的函数所在的上下文

#### 5.高阶函数

- 函数可以作为参数被传递
- 函数可以作为返回值输出

#### 6.AOP

**把一些跟核心业务逻辑模块无关的功能抽离出去**

```js
function service() {
        name = "功能逻辑";
        return name;
      }

      function proxyMethod() {
        let startTime;
        _this = this; //解决this指向问题
        return {
          before: function () {
            _this.startTime = new Date();
            console.log("计时开始");
          },

          after: function () {
            setTimeout(() => {
              endTime = new Date() - _this.startTime;
              console.log("计时结束,用时", +endTime);
            }, 1000);
          },
        };
      }

      const aop = (fn, proxy) => {
        proxy().before();
        fn();
        console.log(name);
        proxy().after();
      };
      aop(service, proxyMethod);

计时开始
功能逻辑
计时结束,用时 1894
```

#### 7.函数柯里化

**部分求值:把多个参数变换成接受一个单一参数的函数,将剩余参数返回**

#### 8.函数节流(放技能)

**单位时间内,只能有一次触发时间的回调函数执行**

**应用场景:**

- 动画场景:避免短时间内多次触发动画引起性能问题
- 拖拽场景:固定时间内只执行一次,防止超高频次触发位置变动
- 缩放场景:监控浏览器窗口大小
- 滚轮场景:鼠标滚轮事件
- Canvas画笔功能

#### 9.函数防抖(回城)

**当触发后再次触发，会取消上一次触发的执行，直到最后一次触发后过去设定时间后才执行**

**应用场景:**

- 按钮提交场景：防止多次点击提交按钮，只执行最后提交的一次
- 服务端验证场景：表单验证需要服务端配合，只执行一段连续的输入事件的最后一次，还有搜索联想词功能类似

#### 10.函数记忆

**将上次的(计算结果)缓存起来,当下次调用时,如果遇到相同的(参数),直接返回(缓存中的数据)**

#### 11.函数睡眠

**JavaScript 引擎线程无法挂起,通过异步实现类似sleep的效果**

#### 12.偏函数

**固定一个函数的一些参数，然后产生另一个更小元的函数。**

## 3.原型链

- 对象:`__proto__` 和 `constructor` 是对象独有
- 函数:`prototype` 是函数独有,但是函数也是对象，所以函数也有 `__proto__` 和 `constructor`

### 1.显示原型`prototype`

**函数的原型对象:**从一个函数指向另一个对象

**任何函数在创建的时候，其实会默认同时创建该函数的 `prototype` 对象。**

### 2.隐式原型

**指向相对应的对象的原型对象:**一个对象指向另一个对象

当访问一个**对象**的属性或方法时,如果对象内部不存在这个属性,就会从它的`__proto__`属性所指向的(原型)对象中进行查找,如果原型对象中也没有,就会继续在该原型对象的原型对象中查找,以此内推,直到查找到顶层原型`null`结束,返回`undefined`

## 4.模块化

把复杂的系统分解到多个模块以方便解码

### 1.单例模式

**简单封装对象:减少全局变量**

**但是可以直接修改模块内部数据**

### 2.IIFE(立即执行函数)模式

**匿名函数自调用(闭包)**

**数据是私有的,外部只能通过暴露的方法操作数据**

### 3.CommonJS

**引入方式:`require`**

**暴露方式:`module.export`或`exports`**

**`module.exports` 和 `exports` 的区别：**

在Node.js中,module是一个全局变量,类似于浏览器端的window

**引入模块:**

- `require(url)`  (url为路径参数)
- 路径:`./`或者`../`
- 第三方模块/内置模块/核心模块:路径直接使用模块名称

**暴露模块:**

- `exports`
- `module.exports`

### 4.AMD(异步模块)(主要是在浏览器使用)

**非同步加载模块,允许指定回调函数**

**特点:**

- 异步加载依赖的模块
- 可在不转换代码的情况下直接在浏览器运行
- 并行加载多个模块
- 可运行在浏览器和Node环境

**暴露模块:**

- 在模块内部使用`return`

**定义模块:**

- `define(['模块名'],function(模块暴露内容){})`
- `require(['模块名'], function (模块暴露内容) {})`
- 在模块内部可以使用`require`定义异步模块

**主模块:**

- `requirejs.config({})`配置使用的模块路径
- `requirejs(['模块名'],function(模块暴露内容){})

**HTML文件引入`<script>`标签:**

- `<script data-main='app.js' src='require.js'></script>`

### 5.CMD(通用模块定义)

**CommonJS 和 AMD 基础上提出的**

**特点：**

- 异步加载，有缓存

### 6. ES6 Module

**特点：**

- 动态引入（按需加载），没有缓存

**引入模块`import`:**

- 统一暴露：`import {模块暴露的内容} from '模块路径'`

```js
import { originModule } from './module.js'

// React Hook
import { useState, useEffect } from 'react'
```

- 分别暴露：`import * as m1 from './module1'`

  ```js
  //将源模块中的所有内容作为对象导入，将所有源模块的命名导出公开为属性和方法。默认导出被排除在此对象之外
  
  import * as module from './module.js'
  //module.originModule
  ```

  ```js
  //从源模块导入特定项，并在导入时指定自定义名称。使用关键字 as，将输入的变量重命名。
  
  import { originMoudle as newMoudleName } from './module.js'
  ```

  

  - 这两者暴露的本质是对象，接收的时候只能以对象的解构赋值的方式来接收值

- 默认暴露：直接使用 `import 模块暴露的内容 from '模块路径'`。默认暴露，暴露任意数据类型，暴露什么数据类型，接收什么数据类型。

  ```js
  import module from './module.js'
  ```

- 空的导入:加载模块代码,但不创建新对象

  ```js
  import './module.js'
  ```

**暴露模块使用 `export`**:

- 分别暴露 

  ```js
  const originModule = true;
  
  export { originModule };
  ```

  ```js
  //在导出时重命名：
  export { foo as newFoo } from 'module'
  export { originModule as smartModule };
  ```

  ```js
  //声明后立即导出：
  export var something = true;
  export function everything (){}
  export class interesting = true;
  ```

- 统一暴露 

- 默认暴露 （默认导出的变量无法使用命名导入）

  ```js
  export default something;
  export { default } from 'module'
  ```

**ES6的模块自动采用严格模式**

### 7.模块继承

```js
// children.js

export * from 'parent'
```

## 5.DOM(文档对象模型)

DOM 可以将任何 HTML 描绘成一个由多层节点构成的结构
