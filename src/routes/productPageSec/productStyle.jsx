import styled from "styled-components";

export const Container = styled.section`
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;

  .big-image {
    width: 30%;
    height: 30%;
  }

  .container-text {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 40%;

    .container-images {
      display: flex;

      img {
        width: 30%;
      }
    }

    button {
      border-radius: 8px;
      padding: 7px;
      border: 1px solid;
      background-color: white;
      cursor: pointer;
      font-size: 20px;
    }

    .container-buttons {
      display: flex;
      gap: 10px;

      .big-button {
        width: 90%;
      }

      .small-button {
        width: 10%;
      }
    }
  }

  @media (min-width: 802px) and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;

    .big-image {
      width: 50%;
      height: 50%;
    }

    //REORDENANDO A ORDEM ORIGINAL E AJUSTANDO A DIREÇÃO
    .container-product-img {
      width: 12%;
      justify-content: center;
      flex-direction: initial;
      order: 0;
    }

    .container-text {
      width: 80%;
    }
  }

  @media (max-width: 801px) {
    font-size: 18px;

    .container-product-img {
      display: none;
    }

    .big-image {
      width: 50%;
      height: 50%;
    }

    .container-text {
      width: 80%;
    }

    .big-button {
      flex-grow: 1;
    }

    .small-button {
      display: none;
    }

    // QUANDO DEFINIMOS ESTILOS PARA UM ELEMENTO, POR MEIO DE CLASSES OU IDS, O NAVEGADOR DETERMINA A ESTILIZAÇÃO COM BASE NO SELETOR.
    // NESSE CASO PRECISAMOS AUMENTAR A ESPECIFICIDADE PARA O BOTÃO ISOLADO PARA APLICAR A ESTILIZAÇÃO DESEJADA.
    .container-text .button-alone {
      background-color: black;
      color: white;
    }
  }
`;
