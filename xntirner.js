// 1

const fib = (num) => {
  let b = 1;
  let a = 0;
  let sum = 0;
  for (let i = 0; i < num; i++) {
    let temp = b + a;
    b = a;
    a = temp;
    sum += a;
  }
  return sum;
};

//2

const getFactorialOf = (num) => {
  if (num <= 1) return num;
  return num * getFactorialOf(num - 1);
};

const isFactorial = (num) => {
  let multiple = 1;
  let i = 1;
  while (multiple <= num) {
    multiple *= i++;
    if (multiple === num) {
      return true;
    }
  }
  return false;
};

//3

const isInRange = (n, min, max) => n >= min && n <= max;

const printReverse = (smnum, binum) => {
  if (!(isInRange(smnum, 10, 30) && isInRange(binum, 10, 30)))
    return "the entered number does not match the conditions";

  let arr = [];

  if (binum === smnum) return [binum];

  if (binum > smnum) {
    while (smnum <= binum) arr.push(binum--);
    return arr;
  }

  while (smnum >= binum) arr.push(binum++);
  return arr;
};

//4

let arr1 = [];
const rec = (n, m) => {
  if (n === m) {
    return arr1;
  } else {
    arr1.push(m);
    m--;
    return rec(n, m);
  }
};

//5

const getGCD = (num1, num2) => {
  while (num2) {
    let t = num2;
    num2 = num1 % num2;
    num1 = t;
  }
  return num1;
};

let c = 0;
function retsumarr(arr) {
  let w = arr.length - 1;
  if (arr.length === 0) {
    return c;
  } else {
    c += arr[w];
    arr.pop();
    // console.log(arr);
    retsumarr(arr);
  }
  return c;
}

//6

const reverseSlice = (str, startIndex, endIndex) => {
  const slice = str.slice(startIndex + 1, endIndex);
  slice.reverse();
  str.splice(startIndex + 1, slice.length, ...slice);
};

const reverseParentheses = (str) => {
  const stack = [];

  str = str.split("");

  for (let i = 0; i < str.length; ++i) {
    if (str[i] === "(") stack.push(i);

    if (str[i] === ")" && stack.length) reverseSlice(str, stack.pop(), i);
  }
  str = str.join("");
  str = str.replaceAll(/[\(\)]/g, "");
  return str;
};

console.log(reverseParentheses("(barev)"));
console.log(reverseParentheses("barev(axper)jan"));
console.log(reverseParentheses("(barev)(dzez)"));
console.log(reverseParentheses("barev(axper(jan))"));









