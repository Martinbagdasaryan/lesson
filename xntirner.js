// 1

function fib(num){
    let c =[0,1,1]
    let b = 1
    let a =1
    let sum = 0;
    for (let i = 3; i < num;i++){
        let g = b + a
        b = a
        a = g
        c.push(g)
    }
    for(let j = 0;j <  num; j ++){
        sum +=c[j]
    }
    console.log(c);
    return sum
}

//2

function fact(num){
    let c =[]
    let q = []
    let b = 1
    for(let j = 1;j<=Math.floor(num/2);j ++){
        c.push(j)
        b = c.reduce((a, b) => a * b, 1)
        q.push(b)
    }
    for(let i = 0;i<q.length;i++){
        if(q[i]===num){
            return true
        }
    }
    return false
    // q.push(c.pop())
}

//3

function pri(smnum,binum){
    let q = []
    if(31 > binum && binum >9){
        for(smnum;smnum<binum+1;smnum++){
            q.unshift(smnum)
        }
        return q
    }
    else {
        return "the entered number does not match the conditions"
    }
}

//4

function sum(number1,number2,number3){
    let a = number1,b = number2,c = number3;
    for(let i = 0;i<number1;i++){
        a += i
    }
    console.log(a);
    for(let i = 0;i<number2;i++){
        b += i
    }
    console.log(b);
    for(let i = 0;i<number3;i++){
        c += i
    }
    console.log(c);
}

//5

let arr = []
function rec(n,m){
    if (n === m){
        return arr
    }
    else{
        arr.push(m)
        m--
        return rec(n,m)
    }
}

