//const fetch = require('node-fetch');
function demoFetchAPI(){
    let url = "http://localhost:3005/autor";

    fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data) =>{
            let autores = data.autor;
            autores.forEach(a =>{
                console.log(a.nombre);
            });
        })
        .catch(function(error){
            console.log("el servidor no esta disponible...");
        });
} 
demoFetchAPI();