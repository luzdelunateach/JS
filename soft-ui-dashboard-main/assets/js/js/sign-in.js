var btn=document.getElementById("singin");
//btn.addEventListener("click",singIn);
var email=document.getElementById("email").value;
var pass=document.getElementById("password").value;
var content=document.getElementById("contentForm");
$(() => {
    $("#newContainerForm").hide();
});
function fetchAPI(e){
    let url = "http://localhost:3005/users";
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    let exist=false;
    fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data) =>{
            let users = data.users;
            users.forEach(u =>{
                if(!exist){
                    if((u.email==email)&&(u.password==pass)){
                        $("#contentForm").hide();
                        let content="<h2 class='font-weight-bolder text-info text-gradient'>WELCOME "+u.email+"!</h2>";
                        $("#newContainerForm").toggle();
                        $("#newContainerForm").html(content);
                        exist=true;
                    }
                }
            });

            if(exist==false){
                alert("The user do not exist");
                window.location.reload();
            }
        })
        .catch(function(error){
            console.log("El servidor no esta disponible...");
        });
} 


function singIn(e){
    let users = [];
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    users.push({
        "Email": "luna@gmail.com",
        "Password": "luna2299"
    });
    users.push({
        "Email": "pao@gmail.com",
        "Password": "pao2244"
        
    });
    users.push({
        "Email": "lupita@gmail.com",
        "Password": "lupita2244"
    });
    
    let search=users.findIndex(e => e.Email === email);
    if(search>=0){
        //alert(users[search].Password);
        if(users[search].Password!==pass){
            alert("Password is incorrect!")
            return;
        }else{
            content.innerHTML="<h2 class='font-weight-bolder text-info text-gradient'>Welcome "+users[search].Email+"!!!</h2>";
        }
    }else{
        alert("The user do not exist");
        return;
    }

   
    //Crear harcodeado un arreglo de collores y password
    //y el email y password 
    //bienvenido 
}