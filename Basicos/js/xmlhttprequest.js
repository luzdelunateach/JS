//global.XMLHttpRequest=require('xhr2');
//const { Console } = require('console');

function accesoApi(){
    console.log("LLamando a swapi");
    //const url = "https://swapi.dev/api/planets/1";
    const url = "http://localhost:3005/alumnos";
    //define el cliente
    let xhttp = new XMLHttpRequest(); //Se crea el objeto para hacer una llamadaNO
    var lista=document.getElementById("list");
    
    xhttp.open('GET', url);
    //se delega el evento onreadystatechange
    xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.onreadystatechange = function() {
        if(this.readyState==1){
            console.log("Opened...");
        }
        if(this.readyState==3){
            console.log("Loading...");
        }
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.response);
            console.log(JSON.stringify(data));
            console.log(JSON.stringify(data.alumnos.length));
            //console.log(data.rotation_period);
            

            data.alumnos.forEach(element => {
                lista.innerHTML+="<li>"+element.name+" "+element.apellido+" "+element.ciudad+"</li>";
            });
        }
        if (this.readyState == 4 && this.status == 404) {
            console.log("Este planeta no existe...");
        }
    }
    xhttp.send(); //si no se pone esto no se manda a llamar la accion
}

accesoApi();
