console.log("One")
console.log("Two")

// setTimeout(callThree, 5000 )

setTimeout (()=>{
    console.log("new element")
}, 5000)
// fetch ("https://jsonplaceholder.typicode.com/users")
// .then( response => response.json())
// .then ( data => console.log(data));
console.log("four")
console.log("five")

function callThree() {
     console.log("three")
}