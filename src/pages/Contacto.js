import React, { useState, useContext } from "react";
import { Layout } from "../components/Layout";
import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";
import Footer from "../components/Footer";
import "./contacto.css";
import clienteAxios from "../config/axios";
import AlertaContext from "../context/alertas/alertaContext";


const Titulo = styled.h4`
  font-family: "PT Serif";
`;

export const Contacto = () => {

  const alertaContext = useContext(AlertaContext);
  const {alerta, mostrarAlerta} = alertaContext;

  const [consulta, guardarConsulta] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [spinner, setSpinner] = useState(false);

  // extraer de usuario
  const { nombre, email, telefono, mensaje } = consulta;

  const onChange = (e) => {
    guardarConsulta({
      ...consulta,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const asunto = `Consulta Papelera el Sol - usuario: ${nombre}`;

    // Validar que no haya campos vacios
    if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
      return;
    }

    try {
      const resultado = clienteAxios.post("/form", {
        telefono,
        email,
        asunto,
        mensaje,
        nombre,
      });

      resultado.then(spinnerReset());
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };

  const spinnerReset = () => {
    setSpinner(true);

    guardarConsulta({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    });
    
    setTimeout(() => setSpinner(false), 3000);
    setTimeout(() => mostrarAlerta(
      `El correo fue enviado correctamente`,
      ""
    ), 3000);
    
  };

  return (
    <div>
      <Layout />
      <div className="container mt-4">
        <div className="row">
          <div className="link-primary col-sm-6">
            <Titulo>Nuestros puntos de contacto:</Titulo>
            <div className="row mt-4 ">
              <h5 className="link-secondary text-decoration-none" href="#">
                <ion-icon name="at-outline" size="large"></ion-icon>{" "}
                info@gmail.com
              </h5>
              <h5 className="link-secondary text-decoration-none mr-4">
                <ion-icon name="logo-instagram" size="large"></ion-icon>{" "}
                Seguinos en Instagram
              </h5>
              <h5 className="link-secondary text-decoration-none mx-auto">
                <ion-icon name="logo-facebook" size="large"></ion-icon> Seguinos
                en Facebook
              </h5>
            </div>
          </div>
          <div className="col-sm-6">
            {spinner ? (
              <>
                <div class="mt-5 d-flex justify-content-center align-items-center">
                  <div class="sk-chase">
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                    <div class="sk-chase-dot"></div>
                  </div>
                </div>
              </>
            ) : (
              <>
              {alerta && 
              <div class="alert alert-success" role="alert">
                {alerta.msg}
              </div>
              }
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label for="formGroupExampleInput">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Nombre"
                    name="nombre"
                    value={nombre}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label for="exampleFormControlInput1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="nombre@ejemplo.com"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label for="formGroupExampleInput">Teléfono (opcional)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Teléfono"
                    name="telefono"
                    value={telefono}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Mensaje</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={onChange}
                    name="mensaje"
                    value={mensaje}
                  ></textarea>
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    type="submit"
                    className="u-full-width button-primary mt-4"
                    //onClick= {()=> enviarEmail()}
                  >
                    Enviar consulta
                  </Button>
                </div>
              </form>
              </>)}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
