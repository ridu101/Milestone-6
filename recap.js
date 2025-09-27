
// var we dont use

const tax=0.07;
let subtotal=0;

// default parameter
 function add ( num1, num2=0){
    return num1+num2;
 }

//  template string
const dynamicText= `The subtotal is $${subtotal} and the tax is $${tax}. The total is $${subtotal + (subtotal*tax)}.`;
console.log(dynamicText);

// arrow function 
const add = (num1, num2=0) => num1 + num2;
// single parameter no parenthesis needed

const tenTimes= num => num * 10;

// spread operator
const numbers=[1,2,3,4,5];

const newNumbers=[...numbers,6,7,8,9,10];;

// destructuring
const person={
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

const {firstName, lastName, age}=person;

console.log(firstName, lastName, age);



