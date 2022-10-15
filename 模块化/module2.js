//单例模式
let moduleTwo = {
  data: "module two data",
  foo() {
    console.log(`foo()${this.data}`);
  },
  bar() {
    console.log(`bar()${this.data}`);
  },
};
