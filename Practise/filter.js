// From [5, 10, 15, 20, 25], create a new array with only numbers greater than 15.

const numbers = [5, 10, 15, 20, 25];

const firstNumberOfGreaterThan15 = numbers.filter(x => x > 15);
// console.log(firstNumberOfGreaterThan15);

// From ["apple", "banana", "kiwi", "mango"], get only the fruits that have more than 5 letters.

const fruits = ["apple", "banana", "kiwi", "mango"];

const fruitsWithMoreThan5Letters = fruits.filter(fruit => fruit.length > 5);
// console.log(fruitsWithMoreThan5Letters);

// From [12, 7, 8, 21, 14, 3], get only the even numbers.

const nums = [12, 7, 8, 21, 14, 3];

const evenNumbers = nums.filter(num => num % 2 === 0)
console.log(evenNumbers);

const nums1 = [12, 7, 8, 21, 14, 3];

const oddNumbers = nums1.filter(num => num % 2 === 1);
console.log(oddNumbers);