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
      <footer className="pt-4 my-md-5 pt-md-5 border-top bg-light ">
        <div className="row">
          <div className="col-3 col-md ml-3">
            <img
              className="mb-2 mr-2"
              src={imagenPapelera}
              alt=""
              width="50%"
              height="30%"
            />

            <small className="d-block mb-3 text-muted">
              &copy; Papelera el Sol 2022
            </small>
          </div>
          <div className="col-3 col-md mr-3">
            <h6>MEDIOS DE PAGO</h6>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <h6 className="link-secondary text-decoration-none">
                  <ion-icon name="cash-outline"></ion-icon> Efectivo
                </h6>
              </li>
              <li className="mb-1 ">
                <h6 className="link-secondary text-decoration-none" href="#">
                  <ion-icon name="card-outline"></ion-icon> Transferencia
                </h6>
              </li>
            </ul>
          </div>
          <div className="col-3 col-md mr-3">
            <h6>CONTÁCTANOS</h6>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <h6 className="link-secondary text-decoration-none" href="#">
                  <ion-icon name="at-outline"></ion-icon> info@gmail.com
                </h6>
              </li>
              <li className="mb-1 ">
                <h6 className="link-secondary text-decoration-none" href="#">
                  <ion-icon name="location-outline"></ion-icon> Buenos Aires
                </h6>
              </li>
              <li className="mb-1 ">
                <h6 className="link-secondary text-decoration-none" href="#">
                  No contamos con punto de Retiro
                </h6>
              </li>
            </ul>
          </div>
          <div className="col-3 col-md ml-3 mb-3">
            <h6>REDES SOCIALES</h6>
            <h6 className="link-secondary text-decoration-none mr-4" >
              <ion-icon name="logo-instagram" size="large"></ion-icon>
            </h6>
            <h6 className="link-secondary text-decoration-none mx-auto">
              <ion-icon name="logo-facebook" size="large"></ion-icon>
            </h6>
           
          </div>
        </div>
      </footer>
      </General>
    </>
  );
};

export default Footer;
