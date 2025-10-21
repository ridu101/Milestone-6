async function loadData() {
    console.log("One")
    console.log("Two")
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res=> res.json())
    // .then(data=> console.log("dataFound"))

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log("Data got:", data);
    console.log("four")
    console.log("five")
    console.log("six")
}

// loadData()

const loadData2 = async () => {

    console.log(1)
    console.log(2)
    console.log(3)

    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log("Got Data:", data.length);
    }
    catch(error){
         console.log("error Happened")
    }

    console.log(4)
    console.log(5)

} 

loadData2();