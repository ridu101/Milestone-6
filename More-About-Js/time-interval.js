console.log(1)
console.log(2)
let count=0;
const interval1 = setInterval ( ()=>{

    console.log(count++);
    if (count >20){
        clearInterval(interval1)
    }
},1000)
console.log(4)
console.log(5)
console.log(6)