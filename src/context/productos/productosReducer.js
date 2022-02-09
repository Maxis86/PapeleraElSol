import { AGREGAR_PRODUCTOBD, OBTENER_PRODUCTOSBD } from "../../types";


export default (state, action ) => {
    switch (action.type) {
        case AGREGAR_PRODUCTOBD:
            return {
                ...state,
                productos: [...state.productos, action.payload],
            }
        case OBTENER_PRODUCTOSBD:
            return {
                ...state,
                productos: action.payload
            }
        default:
            return state;
    }
}