//单例模式
let moduleOne = {
  data: "module one data",
  foo() {
    console.log(`foo()${this.data}`);
  },
  bar() {
    console.log(`bar()${this.data}`);
  },
};

//IIFE模式
(function (window) {
  let data1 = "IIFE module data";

  //操作数据的函数
  function foo1() {
    console.log(`foo1()${data1}`);
  }
  function bar1() {
    console.log(`bar1()${data1}`);
  }
  function otherFun1() {
    //内部私有函数
    console.log("privateFunction go otherFun()");
  }

  //暴露foo函数和bar函数
  window.module = { foo1, bar1 };
})(window);

//CommmonJS
var module2 = {
  id: "001",
  exports: {},
};
var exports = module2.exports;

function foo3() {
  console.log("foo3");
}
function bar3() {
  console.log("bar3");
}
var data3 = "wen";
exports.foo3 = foo3;
exports.bar3 = bar3;
exports.data3 = data3;
