import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

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

export const Login = () => {
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const history = useHistory();

  const [spinner, setSpinner] = useState(false);

  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [usuarioLogeado, setUsuarioLogeado] = useState(false);

  // extraer de usuario
  const { email, password } = usuario;

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
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Los dos campos son obligatorios", "alerta-error");
      setError(true);
      return;
    }

    setError(false);

    console.log("email + password");
    console.log(email + password);

    // Pasarlo al action
    signInWithEmailPassword();

    guardarUsuario({
      email: "",
      password: "",
    });
  };

  const signInWithEmailPassword = () => {
    // [START auth_signin_password]
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        //Signed in
        const user = userCredential.user;
        console.log("user");
        console.log(user);
        setUsuarioLogeado(true);

        setSpinner(true);

        setTimeout(() => {
          setSpinner(false);
          return history.push("/");
          
        }, 3000);
      })
      .catch((error) => {
        mostrarAlerta("Error", "alerta-error");
      });
  };

  return (
    <div className="login">
      <div className="form-usuario">
        {/* { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null } */}

        <div className="contenedor-form sombra-dark">
          <Titulo className="mb-5"> Iniciar Sesión</Titulo>
          {error ? (
            <div class="alert alert-danger" role="alert">
              {alerta.msg}
            </div>
          ) : null}

          <form onSubmit={onSubmit}>
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
              className="btn btn-outline-dark "
              to="./registrarse"
            >
              Registrarse
            </NavLink>

            {/* {usuarioLogeado ? (
              <p className="mt-4">Usuario Registrado</p>
            ) : (
              <p className="mt-4">Usuario No Registrado</p>
            )} */}

            {spinner ? (
              <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
              </div>
            ) : (
              <div className="campo-form mt-5">
                <input
                  type="submit"
                  className="btn btn-outline-primary btn-block"
                  value="Iniciar Sesión"
                />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
