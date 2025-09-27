// const product = { name: 'shirt', price: 500, quantity: 10 }

// // const discount= product.price*20/100;
// // const youPay= product.price- discount;
// // const vat= product.price*7/100;
// // const totalPay= youPay+vat;

// const price = product.price;

// const discount = price * 20 / 100;
// const youPay = price - discount;
// const vat = price * 7 / 100;
// const totalPay = youPay + vat;

// console.log(totalPay);

// method-2

const {name, price, quantity} = { name: 'shirt', price: 500, quantity: 10 }

// const discount= product.price*20/100;
// const youPay= product.price- discount;
// const vat= product.price*7/100;
// const totalPay= youPay+vat;


const discount = (price * 20 / 100 );
const youPay = price - discount;
const vat = price * 7 / 100;
const totalPay = youPay + vat;

console.log(totalPay);
