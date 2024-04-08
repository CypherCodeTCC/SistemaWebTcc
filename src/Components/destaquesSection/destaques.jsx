import styled from "styled-components";

export const Container = styled.section`
  max-width: 100%;
  min-height: 49vw;

  gap: 0 10px;
  padding: 20px;

  font-family: Arial, Helvetica, sans-serif;

  /* Estilos para o título dos destaques */
  .title {
    width: 100%;
    padding: 10px;
    font-size: 25px;
    text-align: center;
  }

  .container-cards {
    width: 100%;
    display: flex;
    padding: 40px;
    gap: 0 20px;
    background-color: black;
  }

  .menu {
    flex-direction: column;
    width: 100%;
    background-color: pink;
  }

  .card {
    border-radius: 8px;
    background-image: linear-gradient(to top, #f2f0f1 20%, #f2f0f1 100%);
    padding: 20px;
  }

  .main-container-right {
    width: 100%;
    display: flex;
    background-color: beige;
    gap: 0 20px;
  }

  .card-left {
    max-width: 50%;
    height: 65vh;
  }

  .card-right {
    max-width: 25%;
    height: 32.5vh;
    flex-grow: 1;
  }

  .book-image {
    object-fit: contain;
    width: 100%;
    height: 250px;
  }

  .big-image {
    padding-top: 50px;
    height: 500px;
  }

  button {
    background-color: transparent;
    padding: 20px;
    font-size: 18px;
    font-weight: bold;
  }

  @media only screen and (max-width: 767px) {
    .titulo-container-destaques {
      max-width: 100vw;
      padding-top: 5.6vw;
      font-size: 7.2vw;
      line-height: 1.33;
    }
  }

  /* Estilos para as abas */
  .menu {
    text-align: center;
    white-space: nowrap;
    height: 64px;
  }

  /* Estilos para os itens das abas */
  .aba-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 3.33333333vw;
  }

  /* Estilos para o título da aba */

  .produtos-destaques {
    max-width: 98.33333333vw;
    height: 49.16666667vw;
  }
`;
