import React, { useState, useContext } from "react";

import addcarrito from "../imagen/carrito-de-compras.png";
import { editarPrecio, eliminarProducto } from "../helpers/ABMProductos";

import CarritoComprasContext from "../context/carritoCompras/carritoComprasContext";
import { useCounter } from "../Hooks/useCounter";

import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { CardContent } from "@material-ui/core";
import styled from "@emotion/styled";

const Inputradio = styled.input`
  margin: 0 1rem;
  height: 2rem;
  max-width: 50px;
  /* margin-bottom: 20px; */
`;

const useStyles = makeStyles({
  root: {
    maxWidth: 150,
    height: 250,
    display: "flex",
    flexWrap: "wrap",
  },
  media: {
    height: 200,
  },
  colorEliminar: {
    color: "white",
    background: "red",
    marginLeft: 5,
  },
  colorEditar: {
    background: "#eeff41",
    color: "black",
  },
});

export const Card = ({
  urlImagen,
  nombre,
  precio,
  id,
  crearCarrito,
  usuario,
}) => {
  const carritoComprasContext = useContext(CarritoComprasContext);
  const { agregarAlCarrito, productosCarrito } = carritoComprasContext;

  const [nuevoPrecio, setNuevoPrecio] = useState("");

  const [counter, setCounter] = useState(1);

  const actualizarState = (e) => {
    setNuevoPrecio(e.target.value);
  };

  const actualizarCantidad = (e) => {
    setCounter(e.target.value);
  };

  const actualizarPrecio = () => {
    editarPrecio(id, nuevoPrecio);
  };

  const addProducto = (nombre, precio, counter) => {
    const keygen = require("keygen");
    const clave = keygen.hex(keygen.pequeño);

    const totalProducto = precio * counter;

    agregarAlCarrito(clave, nombre, precio, counter, totalProducto);
  };

  const classes = useStyles();

  return (
    <>
      {/* ////////////////////////////////// */}
      <div className="card-deck m-2">
        <div class="card" style={{ width: 150, height: 'auto' }}>
          <img
            className="card-img-top"
            src={urlImagen}
            alt="Card image cap"
            style={{ width: "auto", maxHeight: 100 }}
          />
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-center">
              {nombre}
            </h5>
            <p className="card-text"> Precio: $ {precio}</p>

            <p>
              <small>Cantidad </small>
              <input
                style={{ width: 50, height: 20 }}
                type="number"
                id="counter"
                name="counter"
                value={counter}
                onChange={actualizarCantidad}
              />
            </p>
            <div className="d-flex justify-content-center">
              <Button
                style={{ width: "auto", height: "auto" }}
                type="button"
                class="btn btn-outline-primary"
                onClick={() => addProducto(nombre, precio, counter)}
              >
                Agregar
              </Button>
            </div>

            {/* <div className="m-2">
              <Button
                className={classes.colorEditar}
                startIcon={<ion-icon name="pencil-outline"></ion-icon>}
                onClick={actualizarPrecio}
              >
                <input
                  style={{ width: 60, height: 25 }}
                  className="form-control"
                  type="text"
                  value={nuevoPrecio}
                  onChange={actualizarState}
                />
              </Button>
            </div>
            <div>
              <Button
                type="button"
                variant="contained"
                className={classes.colorEliminar}
                //startIcon={<ion-icon name="trash-outline"></ion-icon>}
                onClick={() => eliminarProducto(id)}
              >
                Eliminar
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
