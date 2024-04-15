import styled from "styled-components";

export const Container = styled.section`
  background-color: black;
  color: white;
  width: 70%;
  display: flex;
  margin: auto;
  border-radius: 15px;

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

  .content{
    display: flex;
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
      width: max-content;
    }

    img {
      width: 25%;
    }

    .container-texts{
      flex: 1;
    }
  }
 
  .bookimg{
    height: 0;
  }
`;
