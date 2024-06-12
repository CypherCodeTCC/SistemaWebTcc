import styled from "styled-components";

export const Container = styled.section`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;

  font-family: Arial, Helvetica, sans-serif;
`;

export const ContainerImage = styled.div`
  width: 65%;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ContainerForm = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 767px) {
    width: 80%;
  }
`;

export const SubTitle = styled.p`
  color: #999ba1;
  font-size: 15px;
`;

export const SubTitleCenter = styled.p`
  color: #999ba1;
  font-size: 15px;
  text-align: center;
`;

export const Button = styled.button`
  border-radius: 8px;
  padding: 7px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const ImageIcons = styled.img`
  width: 16px;
  height: 16px;
`

export const ButtonLogin = styled.button`
  background-color: #6236f5;
  color: white;
  padding: 10px;
  cursor: pointer;
`;

export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid;
  padding: 10px;
`;

export const Span = styled.span`
  color: #6236f5;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
