//Seleccionamos los elementos por su id

let cuerpoTabla = document.getElementById("cuerpo-tabla");

let producto= document.getElementById("producto");

let cantidad = document.getElementById("cantidad");

let unitario= document.getElementById("precio-unitario");

let descuento= document.getElementById("descuento");

let botonagregar = document.getElementById("agregarLinea")

    



botonagregar.addEventListener("click", function(event) {

 
    event.preventDefault();
    // Para usar el valor de una variable dentro de la comillas declinadas usamos el dolar y dentro de las llaves ponemos la sentencia console.log
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
//Mediante value= ${variable.value} obtenemos los valores introducidos para posteriormente mediante el id cuerpo tabla 
// introducimos una fila a través del método (.insertRow() y con (.innerHTML=row;) le damos el valor a esa fila.
    document.getElementById("cuerpo-tabla").insertRow().innerHTML=row;
  });