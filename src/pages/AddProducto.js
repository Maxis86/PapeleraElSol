import React, { useState, useContext } from "react";

import Footer from "../components/Footer";
import { Layout } from "../components/Layout";

import ProductosContext from "../context/productos/productosContext";
import AlertaContext from "../context/alertas/alertaContext";

import firebase from "firebase/app";
import "firebase/storage";
import Button from "@material-ui/core/Button";
import { v4 as uuidv4 } from "uuid";
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
  const productosContext = useContext(ProductosContext);
  const { agregarProductoBD } = productosContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta, ocultarAlerta } = alertaContext;

  const [bandera, setBandera] = useState(true);

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
    setBandera(false);

    // Obtener el archivo
    const file = e.target.files[0];
    console.log(e.target.files[0]);
    const keyImagen = uuidv4();

    // Crear referencia
    const ref = firebase.storage().ref("images/" + keyImagen);

    // Subir el archivo
    const upload = await ref.put(file);
    const downloadURL = await upload.ref.getDownloadURL();

    setProducto({
      ...producto,
      urlImagen: downloadURL,
    });

    setTimeout(() => {
      setBandera(true);
    }, 3000);
  };

  //Extraer los valores
  const { nombre, precio } = producto;

  const submitProducto = (e) => {
    e.preventDefault(); // para que no lo mande por el método Get y aparezca en el link

    agregarProductoBD(producto);

    mostrarAlerta(
      `El Producto ${producto.nombre} fue agregado correctamente`,
      ""
    );
    // agregarProducto(producto);

    setProducto({
      urlImagen: "",
      nombre: "",
      precio: "",
    });

    //Despues de 5 seg limpia la alarta
    setTimeout(() => {
      ocultarAlerta();
    }, 6000);
  };

  return (
    <>
      <Layout />
      <div className="container">
        <General>
          <form noValidate autoComplete="off" onSubmit={submitProducto}>
            {alerta ? (
              <div class="alert alert-success" role="alert">
                {alerta.msg}
              </div>
            ) : null}
            <h1 className="mb-4">Producto Nuevo</h1>
            <div className="form-group mb-4">
              <h4 htmlFor="formGroupExampleInput">Descripción</h4>
              <input
                type="text"
                name="nombre"
                className="form-control"
                id="formGroupExampleInput"
                value={nombre}
                placeholder="Descripción"
                onChange={actualizarState}
              />
            </div>

            <div className="form-group mb-4">
              <h4 htmlFor="exampleFormControlInput1">Precio</h4>
              <div className="input-group mb-3">
                <span class="input-group-text">$</span>
                <input
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="precio"
                  label="Precio"
                  type="text"
                  placeholder="Precio"
                  value={precio}
                  onChange={actualizarState}
                />
              </div>
            </div>

            <div className="form-group mb-4">
              <h4 htmlFor="exampleFormControlInput1">Agregar Imagen</h4>
              <input
                type="file"
                id="imagen"
                name="imagen"
                accept="image/*"
                onChange={subirImagen}
                //value={imagen}
              />
              {console.log("imagen")}
            </div>

            <div>
              {!bandera ? (
                <Button class="btn btn-primary" type="button" disabled>
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Cargando...
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  type="submit"
                  className="u-full-width button-primary mt-4"
                >
                  Agregar Producto
                </Button>
              )}
            </div>
          </form>
        </General>
      </div>
      <Footer />
    </>
  );
};
