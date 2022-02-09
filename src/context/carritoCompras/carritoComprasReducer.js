import { AGREGAR_CARRITO } from "../../types";


export default (state, action ) => {
    switch (action.type) {
        case AGREGAR_CARRITO:
            return {
                ...state,
                productosCarrito: [...state.productosCarrito, action.payload],
                totalCompra: [state.totalCompra + action.payload[0].totalProducto]
            }
        default:
            return state;
    }
}