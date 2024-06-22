import styled from "styled-components";

export const Footer = styled.section`
  background-color: black;
  color: #cacaca;
  display: flex;
  padding: 60px;
  gap: 55px;
  justify-content: center;

  font-family: Arial, Helvetica, sans-serif;

  flex-wrap: wrap;

  .container-aboutUs,
  .container-client,
  .container-social-media,
  .container-know-more {
    width: 200px;
  }
  
  .container-payment{
    width: max-content;
  }

  .container-rights-reserved {
    width: 100%;
    text-align: center;
  }

  .client {
    display: flex;

    img {
      width: 35px;
      padding-top: 10px;
    }

    p {
      padding-left: 10px;
    }
  }

  .logo-image {
    width: 10px;
  }

  button {
    background-color: transparent;
    padding-top: 15px;
    text-decoration: underline;
    color: gray;
  }

  p {
    padding-top: 15px;
    color: gray;
  }

  button:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.5s;
  }

  .container-know-more p:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.5s;
  }

  @media (max-width: 1300px) {
    text-align: center;
  }
`;

export const Payment = styled.div`
  display: flex;
  justify-content: space-evenly;

  img{
    width: 61px;
    height: 42px;
  }
`;