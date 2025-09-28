// Print each element of [1, 2, 3, 4, 5] multiplied by 2 (but don’t return a new array).

const numbers = [1, 2, 3, 4, 5];

numbers.forEach( c => console.log( c*2));

// From ["red", "green", "blue"], print each color with the message: "Color: <name>" with it index like color 1: red.

const colors = ["red", "green", "blue"];
// colors.forEach( color => console.log( ` Color: ${color}`));

colors.forEach( (color, index) => console.log( ` Color ${index + 1}: ${color}`));

// From [100, 200, 300], calculate the sum of all numbers (using forEach).

const nums = [100, 200, 300];
let sum = 0;

nums.forEach( n => sum = sum+n);
console.log(sum);

const nums1 = [1,2,3,4,5];
let output = nums1.filter(n => n%2);
console.log(output);