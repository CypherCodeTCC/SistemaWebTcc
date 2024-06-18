import styled from "styled-components";

export const Container = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  width: 87.5%;
  display: flex;
  padding: 1.5625rem 0 1.5625rem 0;
  gap: 0 20px;
  margin: auto;

  font-family: "Poppins", sans-serif;

  @media (max-width: 840px) {
    flex-direction: column;
    gap: 10px 0;
  }
`;

export const MainContainerLeft = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  width: 100%;
  padding: 34px;
  border-radius: 8px;
  background: #f0f0f0;
  transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background: linear-gradient(to top, #cecbcc 20%, #bdbabc 100%);
    transform: scale(1.05);
  }

  @media (max-width: 767px) {
    padding: 10px;
  }
`;

export const CardLeft = styled.div`
  height: 75vh;

  @media (max-width: 767px) {
    height: 65vh;
    max-width: 100%;
    padding: 20px;
  }
`;

export const Title = styled.h1`
  word-wrap: break-word;
  width: 250px;

  @media (max-width: 767px) {
    padding-left: 20px;
  }
`;

export const SubTitle = styled.p`
  width: max-content;
  padding-top: 10px;
  margin-bottom: 10px;
  text-decoration: underline;

  &:hover {
    font-weight: bold;
  }

  @media (max-width: 767px) {
    padding-left: 20px;
  }
`;

export const ImageAlign = styled.div`
  display: flex;
  justify-content: center;
`;

export const BigImage = styled.img`
  object-fit: contain;
  height: 25vh;
  width: 50%;
  height: 70vh;

  @media (max-width: 767px) {
    width: 100%;
    height: 40vh;
  }
`;

export const MainContainerRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px 0;

  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px 0;
  }
`;

export const CardRight = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 32.5vh;
  display: flex;
  flex-direction: column;
`;

export const BookImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 25vh;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
