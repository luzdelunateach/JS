//ambito global
let datoGeneral=100; //tiene mayor prioridad 
//const datoGeneral=100;
calculo1();
calculo2();
console.log(datoGeneral);

function calculo1(){
    datoGeneral = 150;
    datoGeneral+=5;
    if(datoGeneral > 100){
        let otraVariable = 200;
        console.log(`El valor de la varaible es ${otraVariable}`);
    }
    //console.log(`El valor de la varaible es ${otraVariable}`);
}
function calculo2(){
    datoGeneral+=10;
}