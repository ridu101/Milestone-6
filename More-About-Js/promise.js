const getData= new Promise ((resolve, reject)=>{

    const num= Math.random() *10 ;

    console.log("Generated Number:", num)

    if( num > 5){
        resolve({number : num})
    }
    else {
        reject ({Error: 'Data is Not Found'});
    }
})

getData
    .then(data => console.log("Promise Resolved", data))
    .catch( error => console.log('Promise reject:', error))