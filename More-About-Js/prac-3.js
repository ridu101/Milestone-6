const loadApi= async () =>{

   try{
     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data)
   }
   catch(error){
    console.log("Api Failed to Load")
   }
}

loadApi()