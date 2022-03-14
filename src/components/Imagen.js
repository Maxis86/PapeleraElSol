import React from 'react'

import imagen from '../imagen/imagenPapelera.jpg';

import styled from "@emotion/styled";

const Imagene = styled.img`
  max-width: 10%; 
  margin-top:5 rem;
`;

export const Imagen = () => {
    return (
        <>
        <Imagene
            src = {imagen}
            alt="imagen criptomonedas"
        />
        </>
    )
}
