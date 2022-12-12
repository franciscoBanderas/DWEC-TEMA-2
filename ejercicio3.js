//Seleccionamos los elementos por su id

let cuerpoTabla = document.getElementById("cuerpo-tabla");

let producto= document.getElementById("producto");

let cantidad = document.getElementById("cantidad");

let unitario= document.getElementById("precio-unitario");

let descuento= document.getElementById("descuento");

let botonagregar = document.getElementById("agregarLinea")


//Al listener del botón agregar le asignamos dos parámetros, el primer parámetro es un evento, 
//y el segundo parámetro es una función a la cual le pasamos un evento que llama al método 
// event.preventDefault(), para que no se recargue la página.
// En una variable llamada row guardamos el código html de la fila que queremos añadir
botonagregar.addEventListener("click", function(event) {

 
    event.preventDefault();
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
        value=camiseta
      />
    </td>
    <td>
      <input
        class="form-control"
        type="number"
        name="4"
        id="cantidad"
        value=5
      />
    </td>
    <td>
      <input
        class="form-control"
        type="text"
        name="precio-unitario"
        id="3"
        value=4
      />
    </td>
    <td>
      <input
        class="form-control"
        type="text"
        name="pantalones"
        id="descuento2"
        value=3
      />
    </td>
    <td>
      <a href="" id="borrar" class="btn btn-success"
        >Borrar</a
      >
    </td>
  </tr>`;

  // A través del id cuerpo tabla le introducimos una fila mediante el método (.insertRow() y 
  //con (.innerHTML=row;) le damos el valor a esa fila
    document.getElementById("cuerpo-tabla").insertRow().innerHTML=row;
  
  });