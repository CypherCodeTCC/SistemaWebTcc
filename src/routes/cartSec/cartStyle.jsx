import styled from "styled-components";

export const Container = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  padding: 50px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  font-family: "Poppins", sans-serif;
`;

export const ContainerTitle = styled.div`
  width: 81%;
  height: 9.375%;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  padding: 30px;
  border-radius: 4px;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 30px;
  gap: 20px;
`;

export const TitleDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #000;
  font-weight: 600;
  margin-top: 12px;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const ContainerCheckout = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
  width: 81%;
`;

export const Checkout = styled.div`
  padding: 30px;
  display: flex;
  width: 32.57%;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  border: 1.5px solid;
  border-radius: 8px;
`;

export const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const SubTitle = styled.p`
  padding: 30px 0 30px 0;
  font-size: 16px;
  font-weight: bold;
  width: 50%;
`;

export const PrecoTotal = styled.p`
  padding-top: 30px;
  font-size: 16px;
  text-align: right;
  font-weight: bold;
  width: 50%;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;

export const ButtonCart = styled.button`
  background-color: #172b85;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  padding: 10px;
`;

export const CartEmpty = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartItems = styled.section`
  width: 81%;
  padding: 30px;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const NomeAutor = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  width: 160px;
  color: #000;
  font-weight: 600;
  margin-top: 12px;
  word-wrap: break-word;
`;

export const NomeLivro = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  min-width: 70px;
  color: #000;
  font-weight: 600;
  margin-top: 12px;
`;

export const CountHandler = styled.div`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 30%;
  text-align: center;
  font-weight: bolder;
  padding: 10px;
  font-size: 20px;
`;
