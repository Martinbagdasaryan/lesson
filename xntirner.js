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

function foct(num){
    let c =[]
    for(let j = 0;j<num;j ++){
        c.push(j+1)
        for (let i = 1;i <num;i++){
            c[j]*=i
        }

    }
    console.log(c);
    for(let i=0;i<c.length;i++){
        console.log(c[i]);
        if(c[i]===num){
            return true
        }
        else {
            return false
        } 
    }
    return c
}


console.log(foct(4));








