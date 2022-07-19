function fibonacci(n){
    const fibo = [0, 1];
    for(i = 2; i<= n; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2]
}
    return fibo[n];
}
let myFibo = fibonacci(7);
console.log(myFibo)