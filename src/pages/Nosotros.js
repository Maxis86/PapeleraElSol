import React from "react";
import { Layout } from "../components/Layout";
import styled from "@emotion/styled";

const Titulo = styled.h4`
  font-family: 'PT Serif';
`;

export const Nosotros = () => {
  return (
    <div>
      <Layout />
      <div class="container mt-4">
        <div class="row">
          <div class="link-primary col-sm-6">
            <Titulo>Nuestros puntos de contacto:</Titulo>
            <div class="row mt-4 ">
              <h5 class="link-secondary text-decoration-none" href="#">
                <ion-icon name="at-outline" size="large"></ion-icon> info@gmail.com
              </h5>
              <h5 class="link-secondary text-decoration-none mr-4">
                <ion-icon name="logo-instagram" size="large"></ion-icon>{" "}
                Seguinos en Instagram
              </h5>
              <h5 class="link-secondary text-decoration-none mx-auto">
                <ion-icon name="logo-facebook" size="large"></ion-icon> Seguinos
                en Facebook
              </h5>
            </div>
          </div>
          <div class="col-sm-6">
            <form>
              <div class="form-group">
                <label for="formGroupExampleInput">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Nombre"
                />
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="nombre@ejemplo.com"
                />
              </div>

              <div class="form-group">
                <label for="formGroupExampleInput">Teléfono (opcional)</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Teléfono"
                />
              </div>

              <div class="form-group">
                <label for="exampleFormControlTextarea1">Mensaje</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
