import styled from "styled-components";

export const Container = styled.section`
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;

  .container-product-img {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;
    width: 5%;
    height: 100%;

    img {
      width: 100%;
    }
  }

  .big-image {
    width: 40%;
    height: 40%;
  }

  .container-text {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;

    button {
      border-radius: 8px;
      padding: 7px;
      border: 1px solid;
      background-color: white;
      cursor: pointer;
      font-size: 30px;
    }

    .container-images {
      display: flex;

      img {
        width: 30%;
      }
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

    .container-buttons {
      font-size: 10px;
    }

    .big-button {
      flex-grow: 1;
    }

    .small-button {
      display: none;
    }
  }
`;
