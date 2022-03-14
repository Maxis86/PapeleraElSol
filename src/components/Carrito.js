import React from "react";

export const Carrito = ({ producCarrito, indice }) => {
  
  const { nombre, precio, cantidad, totalProducto } = producCarrito[0];

  console.log("producCarrito");
  console.log(producCarrito);

  return (
    <>
      {/* <Container hidden={this.state.formularioTitulo !== "Nueva Marca"}> */}

      <table class="table table-hover">
        <tbody>
        
          <tr>
            <td scope="row"><a type="button" class="btn">
                
              </a></td>
            <td>{nombre}</td>
            <td>{precio}</td>
            <td>{cantidad}</td>
            <td>{totalProducto}</td>  

          </tr>
        </tbody>
        
      </table>
    </>
  );
};

