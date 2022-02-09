import React, { useReducer } from "react";
import productosContext from "./productosContext";
import productosReducer from "./productosReducer";
import db from "../../Firebase/config";

import { AGREGAR_PRODUCTOBD, OBTENER_PRODUCTOSBD } from "../../types";

const ProductosState = (props) => {
  const initialState = {
    productos: [],
  };

  const [state, dispatch] = useReducer(productosReducer, initialState);

  //Funciones
  const agregarProductoBD = (producto) => {
    try {
      db.collection("productos").add(producto);

      // Insertar el proyecto en el state
      dispatch({
        type: AGREGAR_PRODUCTOBD,
        payload: producto,
      });
    } catch (error) {
      const alerta = {
        msg: "Hubo un error",
        categoria: "alerta-error",
      };
      console.log("error");
      console.log(error);
      // dispatch({
      //     type: PROYECTO_ERROR,
      //     payload: alerta
      // })
    }
  };
  const obtenerProductos = () => {
    try {
      db.collection("productos").onSnapshot((snap) => {
        // se actualiza cada vez que hay un cambio

        const productos = [];

        snap.forEach((snapHijo) => {
          productos.push({
            id: snapHijo.id,
            ...snapHijo.data(),
          });
        });
        dispatch({
          type: OBTENER_PRODUCTOSBD,
          payload: productos,
        });
      });
    } catch (error) {
      const alerta = {
        msg: "Hubo un error",
        categoria: "alerta-error",
      };

      // dispatch({
      //     type: PROYECTO_ERROR,
      //     payload: alerta
      // })
    }
  };

  return (
    <productosContext.Provider
      value={{
        productos: state.productos,
        obtenerProductos,
        agregarProductoBD,
      }}
    >
      {props.children}
    </productosContext.Provider>
  );
};

export default ProductosState;
