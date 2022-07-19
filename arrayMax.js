const marks = [45, 65, 78, 26, 68, 83, 56];
let max = marks[0];
for(i = 0; i < marks.length; i++){
    let element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log(max)