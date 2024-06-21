import styled from "styled-components";
import { IMaskInput } from "react-imask";

export const Container = styled.section`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  font-size: 14px;

  font-family: Arial, Helvetica, sans-serif;
`;

export const ContainerImage = styled.div`
  width: 65%;

  @media (min-width: 751px) and (max-width: 1150px) {
    display: none;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Title = styled.h2`
  width: 100%;
`;

export const SubTitle = styled.p`
  color: ${(props) => (props.isError ? "red" : "#999ba1")};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContainerForm = styled.div`
  width: 34%;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;

  @media (min-width: 751px) and (max-width: 1150px) {
    width: 70%;
  }

  @media (max-width: 750px) {
    width: 80%;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 45.5%;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Input = styled(IMaskInput)`
  border-radius: 8px;
  border: 1px solid;
  padding: 10px;
`;

export const Email = styled.div`
  width: 100%;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const InputEmail = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid;
  padding: 10px;
`;

export const CepNumUf = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;

  @media (max-width: 750px) {
    width: 45.5%;
    flex-grow: 1;
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 45.5%;

  @media (max-width: 750px) {
    width: 45.5%;
    flex-grow: 1;
  }
`;

export const City = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 45.5%;

  @media (max-width: 750px) {
    width: 45.5%;
    flex-grow: 1;
  }
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  gap: 10px;
`;

export const Span = styled.span`
  color: #6236f5;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #6236f5;
  border-radius: 8px;
  color: white;
  padding: 10px;
  cursor: pointer;
`;
