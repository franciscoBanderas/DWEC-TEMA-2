"use strict";
//Seleccionamos los elementos por su id y las guardamos en las diferentes variables.
let cuerpoTabla = document.getElementById("cuerpo-tabla");

let producto= document.getElementById("producto");

let cantidad = document.getElementById("cantidad");

let unitario= document.getElementById("precio-unitario");

let descuento= document.getElementById("descuento");

let botonagregar = document.getElementById("agregarLinea")
//En el evento del botón agregar le asignamos dos parámetros
//en el primer parámetro le asignamos un evento, y en el segundo una función.
//En la ejecución de la función mostramos por consola el valor de cada una de las variables.
  botonagregar.addEventListener("click", function() {

   console.log(producto.value);

   console.log(cantidad.value);

   console.log(unitario.value);

   console.log(descuento.value);
})


 