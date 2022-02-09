import React, { useContext } from "react";
import { Tabla } from "./Tabla";

import ok from "../imagen/accept24.png";
import cancel from "../imagen/cancel24.png";
import del from "../imagen/delete24.png";
import CarritoComprasContext from "../context/carritoCompras/carritoComprasContext";

import { Container, Col, Row, Button } from "reactstrap";

export const Carrito = ({ producCarrito, indice }) => {
  const carritoComprasContext = useContext(CarritoComprasContext);
  const { productosCarrito } = carritoComprasContext;

  const { clave, nombre, precio, cantidad, totalProducto } = producCarrito[0];

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

{
  /* 
        
        <br />            
        <Row>

          <Col xs={3}>
            <Row>
              <Col>
                <Button 
                  color="danger"
                  // onClick={this.vaciarCarrito}
                  hidden={true}
                ><img src={del} alt=''/>Vaciar
                </Button>
              </Col>
              <Col>
               
              </Col>
            </Row>
            <Row>
              <Tabla 
                key={producCarrito.clave} 
                // eliminar = {eliminar}
                columnas={{nombre:"descripcion", cantidad:"Cantidad", precio:"Precio", importe:"Importe"}}
                datos={productosCarrito}/>

            </Row>
            <Row>
              <Col>
                <Button 
                      color="primary"
                      // onClick={this.confirmar}
                      // disabled={carrito.length === 0}
                    ><img src={ok} alt=''/>Confirmar
                </Button>
              </Col>
              <Col>
                <Button 
                      color="danger"
                      // onClick={this.cancelar}
                    ><img src={cancel} alt=''/>Cancelar
                </Button>
              </Col>

            </Row>
           
          </Col>
        </Row> */
}
