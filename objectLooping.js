const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
    console.log(number);
}

const employee = {
    name: 'ridwan',
    age: 23,
    position: 'developer',
    salary: 5000

}

for (const keys in employee) {
    // console.log(keys);
    //     console.log('................');
    const values = employee[keys];
    console.log(values);

}