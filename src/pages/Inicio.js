import React from "react";
import Carrousel from "../components/Carrousel";
import { Layout } from "../components/Layout";
import imagen1 from '../imagen/Imagen 1.jpeg';
import imagen2 from '../imagen/Imagen 2.jpeg';
import imagen3 from '../imagen/Imagen 3.jpeg';
import styled from "@emotion/styled";
import Footer from "../components/Footer";

const Imagene = styled.img`
  max-width: 25rem; 
  max-height: 25rem; 
  margin-top: 3rem;
  margin-left: 10px;
  border-style: solid;
  border-color: #bf9270;
`;

const InfoParrafo1 = styled.h3`
  
  font-size: 500%;
  color: #bf9270;
  display: flex;
  text-align: center;
  font-family: "Merriweather", serif;
  justify-content: space-around;
  margin-top: 3rem;
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
  color: #bf9270;
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
          <h3>
            ENVIAMOS TU COMPRA <h5>Entregas a todo el País y al Exterior</h5>
          </h3>
        </InfoParrafo2>

        <h3>|</h3>

        <InfoParrafo2>
          <ion-icon name="lock-closed-outline"></ion-icon>
          <h3>
          COMPRÁ CON SEGURIDAD <h5>Tus datos siempre protegidos</h5>
          </h3>
        </InfoParrafo2>
      </InfoParrafo1>

      <div class="text-center">
        <Imagene src={imagen1} class="rounded" alt="Imagen 1"/>
        <Imagene src={imagen2} class="rounded" alt="Imagen 2"/>
        <Imagene src={imagen3} class="rounded" alt="Imagen 3"/>
      </div>

      <InfoParrafo3>ELIGÍ, PAGÁ Y RECIBÍ TU PEDIDO SIN MOVERTE DE TU CASA.</InfoParrafo3>

      <Card class="card" >
        <Imagene class="card-img-top" src={imagen1} class="rounded" alt="Imagen 1"/>
        <div class="card-body">
          <h5 class="card-title">CB106 - Pack 10 Cajas de 24 X 21 X 6.5 CM DE CARTULINA BLANCA</h5>
          <p class="card-text">$ 810,10</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </Card>

      <Footer/>
      </div>
    </>
  );
};
