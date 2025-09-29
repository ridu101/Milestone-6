function counter() {
    let count = 0;

    return function(user){
        count++;
        return console.log( ' Inside the Counter:', user,  count);
    }
}

const Counter1 = counter();
Counter1('Manik');
Counter1('Manik');
Counter1('Manik');
console.log('-------------------');
const Counter2 = counter();
Counter2('Roton');
Counter2('Roton');
Counter2('Roton');

console.log('-------------------');
const Counter3 = counter();
Counter3('Sakib');
Counter3('Sakib');
Counter3('Sakib');
Counter1('Manik');
Counter2('Roton');