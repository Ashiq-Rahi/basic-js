function factorial(n){
    var fact = 1;
    for(let i = 1; i <= n; i++){
        fact = fact *i;
}
return fact;
}

let myFactorial = factorial(7);
console.log(myFactorial)