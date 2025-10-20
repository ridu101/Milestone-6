const getData1 = new Promise((resolve, reject) => {

    const num = Math.random() * 10;

    console.log("Generated Number1:", num)

    if (num > 1) {
        resolve({ number: num })
    }
    else {
        reject({ Error: 'Data is Not Found' });
    }
})
const getData2 = new Promise((resolve, reject) => {

    const num = Math.random() * 10;

    console.log("Generated Number2:", num)

    if (num > 1) {
        resolve({ number: num })
    }
    else {
        reject({ Error: 'Data is Not Found' });
    }
})
const getData3 = new Promise((resolve, reject) => {

    const num = Math.random() * 10;

    console.log("Generated Number3:", num)

    if (num > 1) {
        resolve({ number: num })
    }
    else {
        reject({ Error: 'Data is Not Found' });
    }
})
const getData4 = new Promise((resolve, reject) => {

    const num = Math.random() * 10;

    console.log("Generated Number4:", num)

    if (num > 1) {
        resolve({ number: num })
    }
    else {
        reject({ Error: 'Data is Not Found' });
    }
})

Promise.all([getData1, getData2, getData3, getData4])
    .then(response => console.log("Data Found-Promise Resolved:", response))
    .catch(error => console.log("Data Not found-Promise Rejected:", error))