function getArraySum(arr){
    let sum = 0;
    for(i = 0; i < arr.length; i++){
        let element = arr[i];
        sum = sum + element;
}
    return sum;
}
let myArr = [34, 546, 87, 45, 76, 42];
let result =  getArraySum(myArr);
console.log(result)