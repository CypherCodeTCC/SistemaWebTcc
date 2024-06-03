import styled from "styled-components";

export const Container = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  padding-bottom: 20px;
`;

export const Checkout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const SubTitle = styled.p`
  padding-top: 10px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  width: 100%;
`;

export const ButtonCart = styled.button`
  background-color: rgb(19, 19, 19);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 40%;
  font-size: 15px;
  padding: 10px;
`;

export const CartEmpty = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartItems = styled.section`
  padding: 30px;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  font-size: 30px;
`;

export const NomeAutor = styled.p`
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #000;
  font-weight: 600;
  margin-top: 12px;
`;

export const NomeLivro = styled.p`
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #000;
  margin-top: 12px;
  font-weight: 600;
`;

export const CountHandler = styled.div``;

export const Button = styled.button`
  background-color: transparent;
  font-size: 30px;
  width: 25%;

  &&:hover {
    background-color: black;
    transition: 0.5s;
    color: white;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 50%;
  text-align: center;
  font-weight: bolder;
  padding: 10px;
  font-size: 20px;
`;
