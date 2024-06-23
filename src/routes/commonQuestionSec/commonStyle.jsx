import styled from "styled-components";

export const Container = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  display: flex;
  gap: 20px;
  padding: 30px;
  font-size: 23px;
  flex-wrap: wrap;
  justify-content: center;

  font-family: "Poppins", sans-serif;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const ContainerImage = styled.div`
  width: 50%;
`;

export const BigImage = styled.img`
  width: 100%;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ContainerText = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
`;

export const Details = styled.details`
  padding-top: 20px;

  &[open] ul {
    max-height: 500px;
    transition: max-height 0.5s ease; /* Transição suave da altura */
  }

  ul{
    max-height: 0;
    overflow: hidden;
    padding: 12px;
    transition: max-height 0.5s ease; /* Transição suave da altura */
  }
`;

export const Summary = styled.summary`
  padding: 16px;
  background-color: #f3f3f3;
  border-radius: 8px;
  cursor: pointer;
`;
