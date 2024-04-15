import styled from "styled-components";

export const Container = styled.section`
  padding: 20px;

  font-family: Arial, Helvetica, sans-serif;
  text-align: center;

  .title {
    padding: 10px;
    text-align: center;
  }

  .container-cards {
    display: flex;
    padding: 20px;
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
    justify-content: center;
    gap: 10px;
  }

  .card-left {
    width: 50%;

    h1{
      padding-top: 15px;
    }
  }

  .card-right {
    width: 47%;
    
    h1{
      font-size: 18px;
    }
  }

  .book-image {
    object-fit: contain;
    width: 100%;
    height: 125px;
  }

  .big-image {
    height: 250px;
  }

  button {
    background-color: transparent;
    padding: 15px;
    font-size: 15px;
    font-weight: bold;
  }

  button:hover{
    cursor: pointer;
    transform: scale(1.2);
    transition: 1.0s;
  }

  .card:hover{
    cursor: pointer;
    background-image: linear-gradient(to top, #cecbcc 20%, #bdbabc 100%);
  }

  @media (max-width: 940px) {    
    .container-cards{
      flex-wrap: wrap;
      gap: 10px 0px;  
    }

    .card-left {
      width: 100%;
    }
    
    .big-image { 
      height: 200px;
  }
}
`;
