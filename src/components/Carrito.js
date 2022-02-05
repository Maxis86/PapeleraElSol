import React from "react";
import { Tabla } from './Tabla'

import ok from '../imagen/accept24.png'
import cancel from '../imagen/cancel24.png'
import del from '../imagen/delete24.png'

import { Container, Col, Row, Button } from "reactstrap";

export const Carrito = ({productosCarrito, eliminar, total="0"}) => {  

    console.log ("estoy en carrito")
    console.log ("productosCarrito")
    console.log (productosCarrito)
    const keygen = require('keygen'); 
    const clave = keygen.hex( keygen.pequeño );

    return (
      <>

        {/* <Container hidden={this.state.formularioTitulo !== "Nueva Marca"}> */}
         <Container hidden={false}> 

        {/* <Container hidden={!this.props.visible}> */}
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
                  {/* <h2 align="align-right">Total: ${this.state.total}</h2> */}
                  <h2 align="align-right">Total: $ {total}</h2>
                </Col>
              </Row>
              <Row>
                <Tabla 
                  key={clave} 
                  eliminar = {eliminar}
                  columnas={{descripcion:"Descripción", cantidad:"Cant", precio:"Precio", importe:"Importe"}}
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
          </Row>
          </Container>
      </>
    );
  };
