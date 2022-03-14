import { AGREGAR_CARRITO, BORRAR_PRODUCTO_CARRITO } from "../../types";


export default (state, action ) => {
    switch (action.type) {
        case AGREGAR_CARRITO:
            return {
                ...state,
                productosCarrito: [...state.productosCarrito, action.payload],
                totalCompra: [parseFloat(state.totalCompra) + parseFloat(action.payload[0].totalProducto)]
            }
        case BORRAR_PRODUCTO_CARRITO:
            return {
                ...state,
                productosCarrito: state.productosCarrito.filter(productoCarrito => productoCarrito[0].clave !== action.payload[0].produtoClave),
                totalCompra: [parseFloat(state.totalCompra) - parseFloat(action.payload[0].precio)],
            }
        default:
            return state;
    }
}