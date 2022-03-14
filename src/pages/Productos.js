import React, { useState, useEffect, useContext } from "react";

import Footer from "../components/Footer";
import ListadoProductos from "../components/ListadoProductos";
import { Layout } from "../components/Layout";

import firebase from 'firebase/app'

export const Productos = () => {

  const [usuario, guardarUsuario] = useState({mail:""});

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      guardarUsuario(user)
      
    } else {
        console.log("usuario no Logeado")
    }
  });

  return (
    
    <>
      <Layout />
        
        <ListadoProductos/>

      <Footer/>
    </>
  );
};
