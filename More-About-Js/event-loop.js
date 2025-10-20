function one() {
    two();
    console.log(1)
}
function two() {
    three()
    console.log(2)
}
function three() {
    setTimeout(() => {
        console.log("inside Three Timeout")
    }, 3000)
    four()
    console.log(3)
}
function four() {
    five()
    console.log(4)
}
function five() {
    setTimeout(() => {
        console.log("Inside Five Timeout")
    }, 5000)
    six()
    console.log(5)
}
function six() {
    seven()
    console.log(6)
}
function seven() {
    console.log(7)
}

one()