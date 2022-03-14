import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

import AlertaContext from "../context/alertas/alertaContext";

import "./login.css";
import "./spinner.css";

import firebase from "firebase/app";
import "firebase/auth";
import styled from "@emotion/styled";

const Titulo = styled.h2`
  margin: 0 auto;
  font-family: "Merriweather", serif;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Registrarse = () => {
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta, ocultarAlerta } = alertaContext;

  const history = useHistory();

  const [spinner, setSpinner] = useState(false);

  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  // extraer de usuario
  const { nombre, email, password } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario quiere iniciar sesión
  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacios
    if (nombre.trim() === "" || email.trim() === "" || password.trim() === "") {
      setError(true);
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    console.log("nombre + email + password");
    console.log(nombre + email + password);

    ocultarAlerta();

    setError(false);

    // Pasarlo al action
    signUpWithEmailPassword(nombre);

    guardarUsuario({
      nombre: "",
      email: "",
      password: "",
    });
  };

  const signUpWithEmailPassword = (nombre) => {
    // [START auth_signup_password]
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        userCredential.user.updateProfile({
          displayName: nombre,
        });

        setSpinner(true);

        setTimeout(() => {
          return history.push("/");
          setSpinner(false);
        }, 3000);
      })
      .catch((error) => {});
  };

  return (
    <div className="login">
      <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          <Titulo className="mb-5">Registrarse</Titulo>
          {error ? (
            <div class="alert alert-danger" role="alert">
              {alerta.msg}
            </div>
          ) : null}
          <form onSubmit={onSubmit}>
            <div className="campo-form">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="nombre"
                id="nombre"
                name="nombre"
                placeholder="Tu Nombre"
                value={nombre}
                onChange={onChange}
              />
            </div>

            <div className="campo-form">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Tu Email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div className="campo-form">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Tu Password"
                value={password}
                onChange={onChange}
              />
            </div>

            <NavLink
              activeClassName="active"
              className="btn btn-outline-dark mr-3"
              to="./a"
            >
              ir a Inicio
            </NavLink>
            <NavLink
              activeClassName="active"
              className="btn btn-outline-dark"
              to="./login"
            >
              Login
            </NavLink>

            {spinner ? (
              <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
              </div>
            ) : (
              <div className="campo-form mt-4">
                <input
                  type="submit"
                  className="btn btn-outline-primary btn-block"
                  value="Crear Cuenta"
                />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
