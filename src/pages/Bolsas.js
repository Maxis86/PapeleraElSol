import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import GridList from "@material-ui/core/GridList";
import db from "../Firebase/config";
import { Layout } from "../components/Layout";
import { Carrito } from "../components/Carrito";
import styled from "@emotion/styled";
import firebase from 'firebase/app'
import { v4 as uuidv4 } from 'uuid';
import { css } from '@emotion/react';
import { CarritoV2 } from "../components/CarritoV2";
import Footer from "../components/Footer";

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

export const Bolsas = () => {
  const [productosStock, setProductoStock] = useState([]);
  
  const keyg = uuidv4();
  const keyg2 = uuidv4();
  const Carr = ([]);

  const [total, setTotal] = useState(0);
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [CargarInicial, setCargarInicial] = useState(false);

  const [usuario, guardarUsuario] = useState({mail:""});

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      guardarUsuario(user)
      
    } else {
        console.log("usuario no Logeado")
    }
  });

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

  useEffect(() => {
    db.collection("productos").onSnapshot((snap) => {
      // se actualiza cada vez que hay un cambio

      const productos = [];

      snap.forEach((snapHijo) => {
        productos.push({
          id: snapHijo.id,
          ...snapHijo.data(),
        });
      });
      setProductoStock(productos);
      
    });
  }, []);


  return (
    
    <>
      <Layout />
      <ProductosCarritoCss>
      
              <ProductosCss>
                <GridList>
                  {console.log("Productos")}
                  {productosStock.map((produc) => (
                    
                    <Card
                      key={keyg2}
                      urlImagen = {produc.urlImagen}
                      nombre={produc.nombre}
                      precio={produc.precio}
                      id={produc.id}
                      crearCarrito={crearCarrito}
                      usuario = {usuario}
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
            {/* <CarritoV2

            />  */}
          </CarritoCss>
        ) : null }
      </ProductosCarritoCss>

      <Footer/>
    </>
  );
};

