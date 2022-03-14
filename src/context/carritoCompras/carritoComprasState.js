import React, { useReducer } from "react";

import carritoComprasReducer from "./carritoComprasReducer";
import carritoComprasContext from "./carritoComprasContext";

import { AGREGAR_CARRITO, BORRAR_PRODUCTO_CARRITO } from "../../types";

const CarritoComprasState = (props) => {
  const initialState = {
    productosCarrito: [],
    totalCompra: 0,
    prueba: "",
    prueba2: 0,
  };

  const [state, dispatch] = useReducer(carritoComprasReducer, initialState);

  //Funciones

  const agregarAlCarrito = (clave, nombre, precio, counter, totalProducto) => {
    const producto = [
      {
        clave: clave,
        nombre: nombre,
        precio: precio,
        cantidad: counter,
        totalProducto: totalProducto,
      },
    ];
    dispatch({
      type: AGREGAR_CARRITO,
      payload: producto,
    });
  };

  const borrarProductoCarrito = (produtoClave, precio) => {
    const valor = [{ produtoClave: produtoClave, precio: precio }];

    dispatch({
      type: BORRAR_PRODUCTO_CARRITO,
      payload: valor,
    });
  };

  return (
    <carritoComprasContext.Provider
      value={{
        productosCarrito: state.productosCarrito,
        totalCompra: state.totalCompra,
        prueba: state.prueba,
        agregarAlCarrito,
        borrarProductoCarrito,
      }}
    >
      {props.children}
    </carritoComprasContext.Provider>
  );
};

export default CarritoComprasState;
