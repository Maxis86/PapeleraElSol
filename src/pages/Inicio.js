import React from "react";
import Carrousel from "../components/Carrousel";
import { Layout } from "../components/Layout";
import imagen1 from '../imagen/Imagen 1.jpeg';
import imagen2 from '../imagen/Imagen 2.jpeg';
import imagen3 from '../imagen/Imagen 3.jpeg';
import Footer from "../components/Footer";

import styled from "@emotion/styled";

const Imagene = styled.img`
  max-width: 20rem; 
  max-height: 20rem; 
  margin-top: 3rem;
  margin-left: 10px;
  border-style: solid;
  border-color: #bf9270;
`;

const InfoParrafo1 = styled.h3`
  
  /* font-size: 100%; */
  color: #bf9270;
  display: flex;
  text-align: center;
  font-family: "Merriweather", serif;
  justify-content: space-around;
  margin: 3rem;
`;

const InfoParrafo2 = styled.h3`
  display: flex;
  ion-icon {
    font-size: 64px;
  }
`;

const InfoParrafo3 = styled.h3`
  margin-top: 3rem;
  padding: 1rem;
  color: red;
  font-size: 150%;
  display: flex;
  justify-content: center;
  font-family: "PT Serif", serif;
`;

const Card = styled.div`
  width: 18rem;
  margin-top: 3rem;
  padding: 1rem;
  color: #bf9270;
  font-size: 150%;

  font-family: "PT Serif", serif;
`;

export const Inicio = () => {

  return (
    <>
      <div>
      <Layout />

      <div>
        <Carrousel />
      </div>

      <InfoParrafo1>
        <InfoParrafo2>
          <ion-icon name="rocket-outline"></ion-icon>
          <h5>
            ENVIAMOS TU COMPRA <b>Entregas a todo el País y al Exterior</b>
          </h5>
        </InfoParrafo2>

        <h3>|</h3>

        <InfoParrafo2>
          <ion-icon name="lock-closed-outline"></ion-icon>
          <h5>
          COMPRÁ CON SEGURIDAD <b>Tus datos siempre protegidos</b>
          </h5>
        </InfoParrafo2>
      </InfoParrafo1>

      <div className="text-center">
        <Imagene src={imagen1} className="rounded" alt="Imagen 1"/>
        <Imagene src={imagen2} className="rounded" alt="Imagen 2"/>
        <Imagene src={imagen3} className="rounded" alt="Imagen 3"/>
      </div>

      <InfoParrafo3>ELIGÍ, PAGÁ Y RECIBÍ TU PEDIDO SIN MOVERTE DE TU CASA.</InfoParrafo3>

      <Card className="card" >
        <Imagene className="card-img-top" src={imagen1} className="rounded" alt="Imagen 1"/>
        <div className="card-body">
          <h5 className="card-title">CB106 - Pack 10 Cajas de 24 X 21 X 6.5 CM DE CARTULINA BLANCA</h5>
          <p className="card-text">$ 810,10</p>
          <a href="#" className="btn btn-primary">Comprar</a>
        </div>
      </Card>

      
      </div>
      <Footer/>
    </>
  );
};
