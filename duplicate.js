let myArr = [34, 65, 78, 23, 65, 67, 34, 78];
let uniqueArray = [];
for(let i = 0; i < myArr.length; i++){
    let element = myArr[i];
    let index = uniqueArray.indexOf(element);
    if(index == -1){
        uniqueArray.push(element);
    }
}
console.log(uniqueArray)


let randomArray = [34, 65, 67, 45, 34, 56, 87, 34, 65];
let sum = 0;
for(let i = 0; i < randomArray.length; i++){
    let element = randomArray[i];
        sum = sum + element;
    }

    console.log(sum)