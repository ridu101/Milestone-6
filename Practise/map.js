// You have an array of numbers [1, 2, 3, 4, 5]. Create a new array where each number is squared.
const numbers = [1, 2, 3, 4, 5];

const squared= numbers.map( x => x*x);
// console.log(squared);


// You have an array of names ["alice", "bob", "charlie"]. Make a new array with all names in uppercase.

const names = ['alice', 'bob', 'charlie'];
const uppercaseNames= names.map( name => name.toUpperCase());
// console.log(uppercaseNames);


// You have an array of numbers [10, 20, 30]. Create a new array where each number is converted to a string with "USD" added (like "10 USD").

const numbers1= [10, 20, 30];

const usdStrings= numbers1.map(numbers1 => numbers1 +'USD');
// console.log(usdStrings);