import React, {useState, useContext, useEffect} from 'react';

import { Card } from "../components/Card";
import { Carrito } from "../components/Carrito";
import db from "../Firebase/config";

import ProductosContext from "../context/productos/productosContext";

import GridList from "@material-ui/core/GridList";
import { v4 as uuidv4 } from 'uuid';
import styled from "@emotion/styled";

const ProductosCarritoCss = styled.div`
  padding: 5px;
  display: flex;
`;
const ProductosCss = styled.div`
  padding: 5px;
  flex-wrap: wrap;
`;
const CarritoCss = styled.div`
  padding: 5px;
`;
const ListadoProductos = () => {
 
    const productosContext = useContext(ProductosContext);
    const { productos, obtenerProductos } = productosContext;
  
    const [productosStock, setProductoStock] = useState([]);
    
    useEffect(() => {
        db.collection("productos").onSnapshot((snap) => {
        // se actualiza cada vez que hay un cambio

        const productos2 = [];

        snap.forEach((snapHijo) => {
            productos2.push({
            id: snapHijo.id,
            ...snapHijo.data(),
            });
        });
        setProductoStock(productos2);
        
        });
    }, []);

    const keyg = uuidv4();
    const keyg2 = uuidv4();
    const Carr = ([]);
  
    const [total, setTotal] = useState(0);
    const [productosCarrito, setProductosCarrito] = useState([]);
    const [CargarInicial, setCargarInicial] = useState(false);
    

    if(productosStock.length === 0 ) return <p>No hay proyectos, comienza creando uno</p>;

    const crearCarrito = (nombreProducto) => {
        setCargarInicial(true)
          // setTotal(parseInt(datosCarrito.importe) + parseInt(total));
    
          };
    
      const eliminar = (dato) => {
        
        const nuevoCarrito = productosCarrito.filter(
          (productoCarrito) => productoCarrito.id !== dato.id
        );
        setProductosCarrito(nuevoCarrito);
      };
    
  return (
    <>
        <ProductosCarritoCss>
          
          <ProductosCss>
            <GridList>
              {productosStock.map((produc) => (
                
                <Card
                  key={produc.id}
                  urlImagen = {produc.urlImagen}
                  nombre={produc.nombre}
                  precio={produc.precio}
                  id={produc.id}
                  crearCarrito={crearCarrito}
                  //usuario = {usuario}
                />
              ))}
            </GridList>
          </ProductosCss>
    

    {CargarInicial ? (
      <CarritoCss>             
         <Carrito
          key={keyg}
          productosCarrito = {productosCarrito}
          eliminar={eliminar}
          total = {total}
        /> 
      </CarritoCss>
    ) : null }
  </ProductosCarritoCss>
    </>

  );
};

export default ListadoProductos;
