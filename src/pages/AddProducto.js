import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/storage";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { agregarProducto } from "../helpers/ABMProductos";
import { Layout } from "../components/Layout";
import { v4 as uuidv4 } from "uuid";
import Footer from "../components/Footer";
import styled from "@emotion/styled";

const General = styled.div`
  /* font-size: 100%; */
  color: #bf9270;
  display: flex;
  text-align: center;
  font-family: "Merriweather", serif;
  justify-content: center;
  margin-top: 3rem;
  margin: 3rem;
`;



export const AddProducto = () => {
  //Crear State de Productos
  const [imagen, setImagen] = useState("");
  const [producto, setProducto] = useState({
    urlImagen: "",
    nombre: "",
    precio: "",
  });

  //Funcion que se ejecuta cada vez que un usuario escribe en un input
  const actualizarState = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const subirImagen = async (e) => {
    // Obtener el archivo
    const file = e.target.files[0];
    console.log("file.name");
    console.log(file.name);
    const keyImagen = uuidv4();

    // Crear referencia
    //const ref = firebase.storage().ref("images/" + file.name);
    const ref = firebase.storage().ref("images/" + keyImagen);

    // Subir el archivo
    const upload = await ref.put(file);
    const downloadURL = await upload.ref.getDownloadURL();

    setProducto({
      ...producto,
      urlImagen: downloadURL,
    });
  };
  //Extraer los valores
  const { urlImagen, nombre, precio } = producto;

  const submitProducto = (e) => {
    e.preventDefault(); // para que no lo mande por el método Get y aparezca en el link

    agregarProducto(producto);

    setProducto({ urlImagen, nombre: "", precio: "" });
  };

  return (
    <>
      <Layout />
      <div className="container">
        <General>
          <form
            
            noValidate
            autoComplete="off"
            onSubmit={submitProducto}
          >
            <h1 className="mb-4">Producto Nuevo</h1>
            <div class="form-group mb-4">
              <h4 for="formGroupExampleInput">Descripción</h4>
              <input
                type="text"
                name="nombre"
                class="form-control"
                id="formGroupExampleInput"
                value={nombre}
                placeholder="Descripción"
                onChange={actualizarState}
              />
            </div>

            <div class="form-group mb-4">
              <h4 for="exampleFormControlInput1">Precio</h4>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                name="precio"
                label="Precio"
                type="text"
                placeholder="Precio"
                value={precio}
                onChange={actualizarState}
              />
            </div>

            <div class="form-group mb-4">
              <h4 for="exampleFormControlInput1">Agregar Imagen</h4>
              <input
                id="imagen"
                label="Imagen"
                name="imagen"
                type="file"
                accept="image/*"
                value={imagen}
                onChange={subirImagen}
                //randomizeFilename
              />
            </div>

            <div>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                type="submit"
                className="u-full-width button-primary mt-4"
              >
                Agregar Producto
              </Button>
            </div>
          </form>
        </General>
      </div>
      <Footer />
    </>
  );
};
