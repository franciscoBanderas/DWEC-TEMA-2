//seleccionamos los elementos por su id

let cuerpoTabla = document.getElementById("cuerpo-tabla");

let producto= document.getElementById("producto");

let cantidad = document.getElementById("cantidad");

let unitario= document.getElementById("precio-unitario");

let descuento= document.getElementById("descuento");

let botonagregar = document.getElementById("agregarLinea")


//mediante  boton agregar el cual le asignamos dos parámetros.
//En el primer parámetro le asignamos un evento, y en el segundo un parámetro
//le indicamos que ejecute la función a la cual le pasamos el parámetro eventoRaton para que la pagína no se recargue

  botonagregar.addEventListener("click", function(eventoDeRaton) {

//Mostramos los valores por  consola
   console.log(producto.value);

   console.log(cantidad.value);

   console.log(unitario.value);

   console.log(descuento.value);

   eventoDeRaton.preventDefault();
 
})

//En el primer parámetro le asignamos un evento, y en el segundo parámetro
//Le indicamos que ejecute la función a la cual le pasamos un parametro que 
//llama  al método event.preventDefault(), para que no se recargue la página
// En una variable llamada row guardamos el código html de la fila que queremos añadir
botonagregar.addEventListener("click", function(event) {

 
    event.preventDefault();
// Para usar el valor de una variable dentro de la comillas declinadas usamos el dolar 
//y dentro de las llaves pondremos la sentencia console.log
    let row= `<tr>
  
  </tr>
</thead>
<tbody id="cuerpo-tabla">
  <tr>
    <td>
      <input
        class="form-control"
        type="text"
        name="producto"
        id="producto"
        value= ${producto.value}
      />
    </td>
    <td>
      <input
        class="form-control"
        type="number"
        name="cantidad"
        id="cantidad"
        value=${cantidad.value}
      />
    </td>
    <td>
      <input
        class="form-control"
        type="text"
        name="precio-unitario"
        id="precio-unitario"
        value= ${unitario.value}
      />
    </td>
    <td>
      <input
        class="form-control"
        type="text"
        name="descuento"
        id="descuento2"
        value=  ${descuento.value}
        />
      
    </td>
    <td>
      <a href="" id="borrar" class="btn btn-success" >Borrar</a>
    </td>
  </tr>`;

  //Mediante el id cuerpo tabla le introducimos una fila mediante el método (.insertRow()
  // y con (.innerHTML=row;) le damos el valor a esa fila
    document.getElementById("cuerpo-tabla").insertRow().innerHTML=row;
//Cuando pulsemos el botón "borrar" indicamos al método que ejecute la función a la cual le pasamos el parámetro event
    botonborrar.addEventListener("click", function(event) {
// Con this.parentNode.parentNode.remove() desde el botón borrar indicamos que borre el contenido de dos nodos hacia arriba
this.parentNode.parentNode.remove();

// Y ponemos los valores de los inputs vacios
cuerpoTabla.value="";
producto.value="";
cantidad.value="";
unitario.value="";
descuento.value="";

    })


  
  });