import React from "react";

import imagenPapelera from "../imagen/imagenPapelera.jpg";

const Footer = () => {
  return (
    <>
      <footer class="pt-4 my-md-5 pt-md-5 border-top bg-light ">
        <div class="row">
          <div class="col-12 col-md ml-3">
            <img
              class="mb-2"
              src={imagenPapelera}
              alt=""
              width="100"
              height="80"
            />

            <small class="d-block mb-3 text-muted">
              &copy; Papelera el Sol 2022
            </small>
          </div>
          <div class="col-6 col-md">
            <h5>MEDIOS DE PAGO</h5>
            <ul class="list-unstyled text-small">
              <li class="mb-1">
                <h7 class="link-secondary text-decoration-none">
                  <ion-icon name="cash-outline"></ion-icon> Efectivo
                </h7>
              </li>
              <li class="mb-1">
                <h7 class="link-secondary text-decoration-none" href="#">
                  <ion-icon name="card-outline"></ion-icon> Transferencia
                </h7>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>CONTÁCTANOS</h5>
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
          <div class="col-6 col-md">
            <h5>REDES SOCIALES</h5>
            <h7 class="link-secondary text-decoration-none mr-4" >
              <ion-icon name="logo-instagram" size="large"></ion-icon>
            </h7>
            <h7 class="link-secondary text-decoration-none mx-auto">
              <ion-icon name="logo-facebook" size="large"></ion-icon>
            </h7>
           
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
