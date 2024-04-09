import styled from "styled-components";

export const Container = styled.section`
  max-width: 100%;
  min-height: 49vw;

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
    max-width: 100%;
    display: flex;
    padding: 40px;
    gap: 0px 5px;
    background-color: black;
  }

  .menu {
    flex-direction: column;
    width: 100%;
    background-color: pink;
    text-align: center;
  }

  .card {
    border-radius: 8px;
    background-image: linear-gradient(to top, #f2f0f1 20%, #f2f0f1 100%);
    padding: 20px;
  }

  .main-container-right {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    
  }

  .card-left {
    max-width: 50%;
    height: 70vh;
    text-align: center;

    h1{
      padding-top: 15px;
    }
  }

  .card-right {
    max-width: 49%;
    height: 34.5vh;
    text-align: center;
    flex-grow: 1;

    h1{
      font-size: 18px;
    }
  }

  .book-image {
    object-fit: contain;
    width: 100%;
    height: 200px;
  }

  .big-image {
    padding: 0;
    height: 400px;
  }

  button {
    background-color: transparent;
    padding: 15px;
    font-size: 15px;
    font-weight: bold;
  }

  @media (max-width: 840px) {
    .container-cards{
      flex-wrap: wrap;
      gap: 10px 0px;
    }

    .main-container-right{
      
    }
    
    .card{
      width: 100%;
    }

    .card-left {
      max-width: 100%;
      height: 50vh;    
    }

    .card-right{
      max-width: 49.5%;
    }
    
    .big-image { 
      height: 250px;
  }
}
`;
