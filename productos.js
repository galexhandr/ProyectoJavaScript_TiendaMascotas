

// URL de la API
const API = `productos.json`;
let productos = [];

// Consumiendo la API con Fetch
fetch(API)
  // Parseamos la respuesta a JSON
  .then((respuesta) => respuesta.json())

  // Aquí trabajamos con los datos obtenidos
  .then((data) => {
    data.map((producto) => {
      productos.push(producto);
    });
  })

  .then(() => {
    productos.map((producto) => {
      document.getElementById("contenedorProductos").innerHTML += `
            <div id ="productos" class="productos">
                <img id="img" src="${producto.imagen}" alt="${producto.nombre}"/>
                <p><b><u>PRODUCTO:</u></b> ${producto.nombre}</p>
                <p><b><u>DESCRIPCIÓN:</u></b> ${producto.descripcion}</p>
                <p><b><u>PRECIO:</u></b> ${producto.precio}</p>
                <p><b><u>STOCK:</u></b>  ${producto.stock}</p>
                <button id= "boton" onclick="seleccion (${productos.indexOf(
                  producto
                )}) ">Agregar al carrito </button>
            </div>`;
    });
    
  })
  
  // Aquí manejamos el error
  .catch((error) => {
    console.log("Hubo un error:", error);
  });
  
let cont=0;

function seleccion(id) {
  
let seleccionados =[];
  

  // localStorage.getItem() devuelve null si la clave no existe
  var datos_existentes = localStorage.getItem("seleccionados");
  datos_existentes = datos_existentes === null ? [] : JSON.parse(datos_existentes);
  datos_existentes.push(productos[id]);
  localStorage.setItem("seleccionados", JSON.stringify(datos_existentes));
  cont++;
  
  //console.log(cont);
  cantidad = document.getElementById("constante").innerHTML = cont ;
  localStorage.setItem("cantidad",cont);
}


