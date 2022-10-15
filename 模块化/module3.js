//es6
// import * as constants from "./constants.js";
import { a, b, d } from "./constants.js";
console.log(a);
console.log(d);

// console.log(constants.a);
// console.log(constants.b);

const esModule = {
  add(x, y) {
    console.log(x * y);
  },
  sum(x, y) {
    console.log(x + y);
  },
};

export default esModule;
