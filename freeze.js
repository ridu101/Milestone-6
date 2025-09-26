const employee ={
    name:'ridwan',
    age:23,
    position:'developer',
    salary:5000

}

Object.freeze(employee);

delete employee.age

employee.location='Nigeria';
employee.experience='2 years';
console.log(employee);
