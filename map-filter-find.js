const student = [
    {id:1, name: 'ridu', marks: 80},
    {id:2, name: 'sidu', marks: 90},
    {id:3, name: 'lidu', marks: 50},
    {id:4, name: 'bidu', marks: 60},
    {id:5, name: 'midu', marks: 70},    
]

// for accessing any particular element of the object array
const names= student.map( student => student.marks);
console.log(names)
//  for accessing any particular element of the object array and filter the elements based on condition
const goodStudents= student.filter(student => student.marks >60);
//  for accessing any particular element of the object array and find the first element based on condition
const goodStudentFirst= student.find(student => student.marks >60);
// console.log(goodStudents)
console.log(goodStudentFirst);