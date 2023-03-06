// 1

function fib(num) {
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
}

// console.log(fib(6));
//2

const getFactorialOf = (num) => {
  if (num <= 1) return num;
  return num * getFactorialOf(num - 1);
};

function isFactorial(num) {
  let multiple = 1;
  let i = 1;
  while (multiple <= num) {
    multiple *= i++;
    if (multiple === num) {
      return true;
    }
  }
  return false;
}

//3

function printReverse(smnum, binum) {
  let arr = [];
  if (31 > binum && binum > 9 && binum > smnum) {
    for (smnum; smnum < binum + 1; smnum++) {
      arr.unshift(smnum);
    }
    return arr;
  } else if (31 > smnum && smnum > 9 && binum < smnum) {
    for (binum; binum < smnum + 1; binum++) {
      arr.unshift(binum);
    }
    return arr;
  } else {
    return "the entered number does not match the conditions";
  }
}
//4

let arr = [];
function rec(n, m) {
  if (n === m) {
    return arr;
  } else {
    arr.push(m);
    m--;
    return rec(n, m);
  }
}
