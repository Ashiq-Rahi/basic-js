let myStatement = 'this is a statement and this will be here for all the time';
let count = 0;
for(i = 0; i < myStatement.length; i++){
    let char = myStatement[i];
    if(char == " " && char[i - 1] != " "){
        count++;
    }
}
count++;
console.log(count)