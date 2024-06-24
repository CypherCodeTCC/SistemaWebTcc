import styled from "styled-components";

export const Container = styled.section`
  @import url("https://fonts.googleapis.com/css?family=inter:100,200,300,400,500,600,700,800,900&display=swap");

  min-height: 80vh;
  padding: 30px;  
  display: flex;  
  flex-direction: column;
  gap: 20px;
  font-family: "Inter", Arial, Helvetica, sans-serif;

  @media (max-width: 767px){
    padding: 10px;
  }
`;

export const ContainerPayments = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export const PayNow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const SubTitle = styled.p`
  font-size: 16px;
`;

export const Ahref = styled.a`
  font-size: 16px;
  font-weight: 500;
  background-color: #2196F3;
  border: 1px solid #000000;
  color: white;
  padding: 6px;
  border-radius: 8px;
  cursor: pointer;

  &&:hover{
    background-color: #1976D2;
    color: #f0f0f0;
    transition: 0.5s;
    transform: scale(1.1);
  }
`;

export const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  .bold{
    font-weight: bold;
  }
`;

export const ReactIcon = styled.div`
  text-align: center;
`;