let dto=document.querySelector("select").value;
document.querySelector("#precio").addEventListener("keyup", leer)
document.querySelector("select").addEventListener("change", cambio )

function leerCOPILOT(){
    let precio = document.querySelector("precio").value
    let descuento = document.querySelector("descuento").value
    let resultado = precio * descuento / 100
    document.querySelector("resultado").innerHTML = resultado
}
function cambio(){
    dto=parseInt(document.querySelector("select").value);
    leer();
}
function leer(){
   (document.querySelector("#precio").value)
   ? calcular()
   : vaciar();
}
function vaciar(){
    document.querySelector("#precio").value = "";
    document.querySelector("#descuento").value = "";
    document.querySelector("#total").value = "";
}

function calcular(){
    let cantidad =Number(document.querySelector("#precio").value);
    let descuento =Number((cantidad*(dto/100)).toFixed(2));
    let total=`${cantidad} - ${descuento} = ${Number((cantidad-descuento).toFixed(2))}`
    document.querySelector("#descuento").value = descuento;
    document.querySelector("#total").value = total;
}