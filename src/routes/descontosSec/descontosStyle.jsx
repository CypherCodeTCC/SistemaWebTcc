import styled from "styled-components";

export const Container = styled.section`
  background-color: black;
  color: white;
  width: 70%;
  border-radius: 18px;
  padding: 30px;
  margin: auto;

  font-family: Arial, Helvetica, sans-serif;

  .container-content{
    display: flex;
  }

  .container-text{
    font-size: 18px;

    span{
      color: orange;
    }

    p{
      font-size: 15px;
      padding-top: 15px;
    }
  }

  .main-container-left{
    display: flex;
    flex-wrap: wrap;    
  }

  .card-left{
    width: 45%;
  }

  .card-right{
    width: 100%; 
    
  }

  .big-image{
    width: 300px;
    height: 350px;
  }

@media (max-width: 940px){
  width: 80%;
  font-size: 15px;

  .container-content{
    flex-direction: column;
  }

  .container-text{
    flex-grow: 1;
    text-align: center;

    p{
      padding-top: 15px;
      padding-bottom: 25px;
    }
  }

  .card-left{
    text-align: center;
    flex-grow: 1;
  }

  .card-right{
    padding-top: 20px;
    flex-grow: 1;
    text-align: center;
    gap: 100px;
    height: max-content;
  }
}
`;
