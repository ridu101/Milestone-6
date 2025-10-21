
function tellJoke(){
 console.log("Hah Nice Joke !!!!!")
}
let count=0;
const jokeInterval = setInterval ((tellJoke), 2000);

// after 10 second stop talking jokes

setTimeout (()=>{
    clearInterval(jokeInterval)
},10000);