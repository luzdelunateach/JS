async function demoFetchAPI(){
    let url = "http://localhost:3005/autor";
    let response = await fetch(url);
    let autores = await response.json()
    console.log(autores);
    /*fetch(url)
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
        });*/

        //si queiro evitar errores usaria un try y un catch
        //modulo de express puede crear un web server
        //le instalamos el cors para dejar pasar las peteiciones hacia el api que tenemos en otro archivo
        //los estandares que tenemos del ecma script
} 
demoFetchAPI();