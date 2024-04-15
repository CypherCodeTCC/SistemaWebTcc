import styled from "styled-components";

export const Container = styled.section`
  background-color: black;
  color: white;
  width: 73%;
  display: flex;
  margin: auto;
  border-radius: 15px;

  font-family: Arial, Helvetica, sans-serif;

  .container {
    padding: 30px;
    width: 100%;
    max-width: 100%;

    h1 {
      font-size: 3vw;
      padding-bottom: 25px;
      word-wrap: break-word;
      width: 650px;
    }

    p {
      font-size: 1.5vw;
      word-wrap: break-word;
      width: 40vw;
    }

    span {
      color: orange;
    }
  }

  .content{
    width: 100%;
    display: flex;
  }
  .content-text{
    width: 100%;
  }

  .container-statistic {
    padding: 0;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
  }

  .pos1,
  .pos2,
  .pos3,
  .pos4 {
    width: 49%;
    height: max-content;

    p {
      font-size: 14px;
      width: max-content;
    }

    img {
      width: 3vw;
    }

    .container-texts{
      flex: 1;
    }
  }
 
  .bookimg{
    height: 0;
  }

@media (max-width: 1300px){
  .bookimg{
    display: none;
  }
}

@media (max-width: 900px){
  width: 95%;

  .container{
    width: 100%;
    padding: 20px;

    h1{
      font-size: 1.3em;
      width: max-content;
    }
    p{
      font-size: 1.2em;
      width: 500px;
    }
  }

  .container-statistic{
    justify-content: center;
  }


  .pos1,
  .pos2,
  .pos3,
  .pos4 {
    width: 20%;
    
    img {
      width: 25%;
    }
    p{
      width: 0.1em;
      white-space: nowrap;
    }
  }
}
`;
