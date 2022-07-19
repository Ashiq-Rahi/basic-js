let a = 8;
let b = 5;
let temp = a;
a = b;
b = temp;
console.log('this is ', a, b);

let x = 8;
let y = 5;
x = x + y;
y = x - y;
x = x - y;
console.log(x, y)

let i = 5;
let j = 9;
[i, j] = [j, i];
console.log(i, j)