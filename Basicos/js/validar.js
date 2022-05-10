function validar(){
  let personas = [];
  sessionStorage.setItem('personas',contenido);
  let nombre = document.getElementById('nombre').value;
  let edad = parseInt(document.getElementById('edad').value);
  let ingreso = parseInt(document.getElementById('ingreso').value);
  if (nombre === "") {
    alert("Por favor, escribe tu nombre de usuario.");
    nombre.focus();
  }else{
    if(!Number.isInteger(edad)) {
        alert("Por favor, escribe tu edad con datos numericos");
        edad.focus();
        document.getElementById('edad').value="";
      }else{
        if(!Number.isInteger(ingreso)) {
            alert("Por favor, escribe ingreso con datos numericos");
            ingreso.focus();
            document.getElementById('ingreso').value="";
        }else{
            var registro={
                "nombre": nombre,
                "edad": edad,
                "ingreso": ingreso
            } //es un bojeto, s epuede poner la notacion clave y valor
            personas.push(registro);
            personas.forEach(function(x){
                //alert(`Los datos del registro son \nNombre: ${registro.nombre} \nEdad: ${registro.edad} \nIngreso: ${registro.ingreso}`);
                alert(`Las personas registradas son \nNombre: ${x.nombre} \nEdad: ${x.edad} \nIngreso: ${x.ingreso}`);
            });
            window.localStorage.setItem('personas', personas);
             //interpolado en los backtips
            
        }
    }
  }
}