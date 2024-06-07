import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  gap: 80px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
`;

export const ContainerImage = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ImageLibrary = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  padding-bottom: 30px;
  font-size: 35px;

  @media (max-width: 1000px) {
    font-size: 25px;
  }
`;

export const Span = styled.span`
  color: #172b85;
`;

export const ContentChecked = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  padding-top: 30px;
`;

export const Image = styled.img`
  width: 30px;
`;
