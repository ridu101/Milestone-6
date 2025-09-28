const manik = { name: 'Manik', money: 5000 }
const roton = { name: 'Roton', money: 6000 }

console.log('before call function:', manik.money, roton.money)

function totalMoney(person1, person2) {

    person1.money = 0;
    person2.money = person2.money / 2;

    const total = person1.money + person2.money;
    return total;


}

const total = totalMoney(manik, roton);
console.log('Now total money:', total)

console.log('after call function:', manik.money, roton.money)