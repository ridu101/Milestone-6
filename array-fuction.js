// function declaration
function add (num1, num2){
    return num1+num2;
}

// function expression

const addition= function (num1,num2){
    return num1+num2;
}

const result= addition(20,20);
console.log(result);

// arrow function

const newSum = (num1, num2) => num1+num2;
const res= newSum(20,30);
console.log(res);

// multiline arrow function

const mult= (num1, num2) => {
    const mult1= num1*5;
    const mult2= num2 *10;
    const result = mult1+mult2;

    return result;
}
const multiresult= mult(10,20);
console.log(multiresult);