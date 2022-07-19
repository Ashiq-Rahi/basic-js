const students = [
    {id: 21, name : "Omor Sunny"},
    {id: 31, name : "Mannaaaa"},
    {id: 41, name : "Sakib Khan"},
    {id: 71, name : "Ananta Jalil"},
];

let output = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    output.push(element.name);    
}
console.log(output)

const ids = students.map( x => x.id);
console.log(ids)

const bigger = students.filter(x => x.id > 40);
const biggerOne = students.find(x => x.id > 40);
console.log(biggerOne)