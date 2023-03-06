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
    for(y = 0;y < num;y++){
        for(let j = 0;j<num;j ++){
        c.push(j+1)
        for (let i = 1;i <num;i++){
            c[j]*=i
        }
    }
    tv = c.pop()
    q.push(tv)
    num--
    }
    return q
}


console.log(foct(5));








