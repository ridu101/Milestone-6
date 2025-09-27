const numbers = [1, 2, 3, 4, 5];


// const doubled = []
// for ( const number of numbers){
//  const result = number*2;
//  doubled.push(result)
// }   

// const doubleIt= x => x*2;
// const doubled = numbers.map(doubleIt)

// inline function

const doubled = numbers.map(x => x * 2);

const fiveTimes = numbers.map(y => y * 5);

const squared = numbers.map(z => z * z);
// console.log(doubled);
// console.log(fiveTimes);
// console.log(squared);

const frineds = ['Tom Hanks', 'rom Cruise', 'Pom Brady', 'Hom Solaiman'];
const nameLenght = frineds.map(name => name.length)
console.log(nameLenght);

const firstLetter = frineds.map(name => name[0]);
console.log(firstLetter)




