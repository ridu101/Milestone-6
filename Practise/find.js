// From [5, 12, 8, 130, 44], find the first number greater than 10.

const numbers = [5, 12, 8, 130, 44];

const firstNumberOfGreaterThan15= numbers.find( x => x> 10);
// console.log(firstNumberOfGreaterThan15);

// From ["pen", "pencil", "eraser", "marker"], find the first word that starts with "p".

const words = ["pen", "pencil", "eraser", "marker"];

const firstWordStartingWithP= words.find( word => word[0] === 'p');
// console.log(firstWordStartingWithP);