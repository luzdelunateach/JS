function demoFetchAPI(){
    let url = "http://localhost:3005/users";

    fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data) =>{
            let autores = data.autor;
            autores.forEach(a =>{
                console.log(a.email);
            });
        })
        .catch(function(error){
            console.log("El servidor no esta disponible...");
        });
} 
demoFetchAPI();