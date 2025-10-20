console.log(1)
console.log(2)
const timeOut1 = setTimeout ( () => {
    console.log(3)
}, 5000)
const timeOut2 = setTimeout ( () => {
    console.log(300)
}, 5000)

clearTimeout(timeOut1, timeOut2)
console.log(4)
console.log(5)