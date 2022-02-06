import React from "react";

import imagenPapelera from "../imagen/imagenPapelera.jpg";
import styled from "@emotion/styled";

const General = styled.div`
  max-width: 96%; 
  max-height: 25rem; 
  margin-top: 3rem;


`;

const Footer = () => {
  return (
    <>
      <General>
      <footer class="pt-4 my-md-5 pt-md-5 border-top bg-light ">
        <div class="row">
          <div class="col-3 col-md ml-3">
            <img
              class="mb-2 mr-2"
              src={imagenPapelera}
              alt=""
              width="50%"
              height="30%"
            />

            <small class="d-block mb-3 text-muted">
              &copy; Papelera el Sol 2022
            </small>
          </div>
          <div class="col-3 col-md mr-3">
            <h6>MEDIOS DE PAGO</h6>
            <ul class="list-unstyled text-small">
              <li class="mb-1">
                <h7 class="link-secondary text-decoration-none">
                  <ion-icon name="cash-outline"></ion-icon> Efectivo
                </h7>
              </li>
              <li class="mb-1 ">
                <h7 class="link-secondary text-decoration-none" href="#">
                  <ion-icon name="card-outline"></ion-icon> Transferencia
                </h7>
              </li>
            </ul>
          </div>
          <div class="col-3 col-md mr-3">
            <h6>CONTÁCTANOS</h6>
            <ul class="list-unstyled text-small">
              <li class="mb-1">
                <h7 class="link-secondary text-decoration-none" href="#">
                  <ion-icon name="at-outline"></ion-icon> info@gmail.com
                </h7>
              </li>
              <li class="mb-1 ">
                <h7 class="link-secondary text-decoration-none" href="#">
                  <ion-icon name="location-outline"></ion-icon> Buenos Aires
                </h7>
              </li>
              <li class="mb-1 ">
                <h7 class="link-secondary text-decoration-none" href="#">
                  No contamos con punto de Retiro
                </h7>
              </li>
            </ul>
          </div>
          <div class="col-3 col-md ml-3 mb-3">
            <h6>REDES SOCIALES</h6>
            <h7 class="link-secondary text-decoration-none mr-4" >
              <ion-icon name="logo-instagram" size="large"></ion-icon>
            </h7>
            <h7 class="link-secondary text-decoration-none mx-auto">
              <ion-icon name="logo-facebook" size="large"></ion-icon>
            </h7>
           
          </div>
        </div>
      </footer>
      </General>
    </>
  );
};

export default Footer;
