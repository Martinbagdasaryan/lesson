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
function foct(num){
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


console.log(foct(6));








