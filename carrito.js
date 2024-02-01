//creo el elemento div
//let localStorage.getItem("cantidad")=0;
var data = JSON.parse(localStorage.getItem("seleccionados"));
let datos2 = toString(localStorage.getItem("cantidad"));
var contenedor1 = document.createElement("div");
document.body.appendChild(contenedor1);

document.getElementById("constante").innerText += localStorage.getItem("cantidad");

//le añado un id al elemento div1
var div = document.getElementsByTagName("main")[0];
div.className = "carrito";
div.id = "contenedor";

var mostrarInfo = data.map(function(info){
  return  '<div class ="item">'
              +'<p>'+info.nombre+'</h2>'
              +'<p>'+info.descripcion+'</p>'
              +'<p>'+info.precio+' $ </p>'
              //+'<img src='+info.imagen+' />' 
          +'</div>';
}).join('')
document.getElementById("contenedor").innerHTML= mostrarInfo;





let refresh = document.getElementById("boton");
refresh.addEventListener('click', _ => {
  localStorage.clear();          
  location.reload();
  document.getElementById("constante").innerText="";
});




let total=0;
for(let i of data[precio]) total+=i;
console.log(total);



