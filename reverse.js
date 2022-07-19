function reverseString(string){
    let reverse = "";
    for(let i = 0; i < string.length; i++){
        let char = string[i]
        reverse = char + reverse;
    }
    return reverse;
}
let myStatement = reverseString('My Name is Ashiq Al Alam');
console.log(myStatement)

