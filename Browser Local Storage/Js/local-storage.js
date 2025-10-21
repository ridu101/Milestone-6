// add random number to local Storage
const addToLs = () => {

    const number = Math.ceil(Math.random() * 100)

    console.log("Number : ", number);
    localStorage.setItem("number: ", number)
}
// read the random Number
const getNumberFromLs = () => {
    const number = localStorage.getItem('number: ')
    console.log('From Local Storage : ', number);
}


//************ */ create an object and set to local storage*********************
const objectAddToLs = () => {
    const customer = { name: 'Ridwan Ahmed', Price: 10000, Location: "Savar, Dhaka" }
    const customerString = JSON.stringify(customer)
    localStorage.setItem("customer:", customerString)
}
// read from an object 
const readAnObjectValue = () => {
    const customerJson=localStorage.getItem('customer:')
    const customerObject=JSON.parse(customerJson);
    console.log(customerObject.Price)
 
    
}
