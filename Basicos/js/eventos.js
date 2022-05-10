function generateUI(){
    let divPrincipal=document.getElementById("contenido");
    let botton1=document.createElement("button");
    let botton2=document.createElement("button");
    botton1.innerHTML="Boton1";
    botton1.addEventListener("click", function(e){
        console.log("BUTTON 1");
    });
    botton2.innerHTML="Boton2";
    botton2.addEventListener("click", e=> {
        console.log("BUTTON 2");
    });
    botton2.addEventListener("click", clickGeneral); //nada mas el nombre de la funcion
    divPrincipal.appendChild(botton1);
    divPrincipal.appendChild(botton2);

   
}

function clickGeneral(){
    alert("Click general");
}