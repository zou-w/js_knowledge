# 回顾知识

## 1.浅拷贝&深拷贝

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



## 2.构造函数调用模式

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

## 3.函数

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