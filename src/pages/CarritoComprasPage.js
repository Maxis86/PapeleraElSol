import React, { useContext } from "react";
import { Layout } from "../components/Layout";
import Footer from "../components/Footer";
import { Carrito } from "../components/Carrito";
import CarritoComprasContext from "../context/carritoCompras/carritoComprasContext";
import { Button } from "reactstrap";

const CarritoComprasPage = () => {
  const carritoComprasContext = useContext(CarritoComprasContext);
  const { productosCarrito, totalCompra } = carritoComprasContext;

  const keygen = require("keygen");
  const clave = keygen.hex(keygen.pequeño);

  return (
    <>
      <Layout />
      {/*  */}
      <div className="container mt-3">
        <table class="table table-borderless">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Descripción</th>
              <th scope="col">Precio c/u</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Total</th>

              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {productosCarrito.map((producCarrito, indice) => (
              <tr>
                <td>{indice + 1}</td>
                <td>{producCarrito[0].nombre}</td>
                <td>$ {producCarrito[0].precio}</td>
                <td>{producCarrito[0].cantidad}</td>
                <td>$ {producCarrito[0].totalProducto}</td>
                <td scope="row">
                  <a type="button" class="btn">
                    <ion-icon name="trash-outline"></ion-icon>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {totalCompra && (
          <>
            <h1 class="d-flex justify-content-end">Total: $ {totalCompra} </h1>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              type="submit"
              className=" button-primary mt-4 d-flex justify-content-end "
            >
              Enviar email con pedido
            </Button>

            
          </>
        )}
        
      </div>

      <Footer />
    </>
  );
};

export default CarritoComprasPage;
