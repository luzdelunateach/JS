function suma(){
 let num = parseInt(document.getElementById("txtNumero1").value);
 let num2= parseInt(document.getElementById("txtNumero2").value);
 let total = num+num2;
 alert("Suma es: "+total);
}

function resta(){
    let num = parseInt(document.getElementById("txtNumero1").value);
    let num2= parseInt(document.getElementById("txtNumero2").value);
    let total = num-num2;
    alert("Resta es: "+total);
}

function multiplicacion(){
    let num = parseInt(document.getElementById("txtNumero1").value);
    let num2= parseInt(document.getElementById("txtNumero2").value);
    let total = num*num2;
    alert("Multiplicación es: "+total);
}

function division(){
    let num = parseInt(document.getElementById("txtNumero1").value);
    let num2 = parseInt(document.getElementById("txtNumero2").value);
    let total = num/num2;
    alert("División es: "+total);
}