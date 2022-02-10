import React, {useReducer} from 'react';


import { AGREGAR_CARRITO } from "../../types";
import carritoComprasReducer from './carritoComprasReducer';
import carritoComprasContext from './carritoComprasContext'

const CarritoComprasState = props => {
    
    const initialState ={
        productosCarrito : [],
        totalCompra: 0
    }

    const [state, dispatch] = useReducer (carritoComprasReducer, initialState);

    //Funciones

    const agregarAlCarrito = (clave, nombre, precio, counter, totalProducto) => {

            const producto = [{
                clave: clave,
                nombre: nombre,
                precio: precio,
                cantidad: counter,
                totalProducto: totalProducto
            }]
            dispatch({
                type: AGREGAR_CARRITO,
                payload: producto
            })
 
    }

 
    return (
        <carritoComprasContext.Provider
            value={{
                productosCarrito: state.productosCarrito,
                totalCompra: state.totalCompra,
                agregarAlCarrito
            }}
        >
            {props.children}
        </carritoComprasContext.Provider>
    )
}

export default CarritoComprasState;