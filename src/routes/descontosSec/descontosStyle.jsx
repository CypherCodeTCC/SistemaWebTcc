import styled from "styled-components";

export const Container = styled.section`
  background-color: black;
  color: white;
  min-height: 50vh;
  width: 50%;
  display: flex;
  margin: auto;
  border-radius: 8px;

  font-family: Arial, Helvetica, sans-serif;

  .container {
    padding: 30px;

    h1 {
      font-size: 40px;
      padding-bottom: 25px;
      word-wrap: break-word;
      width: 650px;
    }

    p {
      font-size: 18px;
      word-wrap: break-word;
      width: 550px;
    }

    span {
      color: orange;
    }
  }

  .container-statistic {
    padding: 0;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    height: max-content;
    gap: 10px;
  }

  .pos1,
  .pos2,
  .pos3,
  .pos4 {
    width: 44%;
    height: max-content;

    p {
      font-size: 14px;
    }

    img {
      width: 15%;
    }
  }
`;
