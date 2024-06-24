import styled from "styled-components";
import { IMaskInput } from "react-imask";

export const Container = styled.section`
    @import url("https://fonts.googleapis.com/css?family=inter:100,200,300,400,500,600,700,800,900&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

    padding: 30px;
    min-height: 80vh;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

export const ContainerAddress = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Title = styled.h1`
    width: 100%;
    font-size: 36px;
    font-weight: 500;
    font-family: "Inter", Arial, Helvetica, sans-serif;
`;

export const SubTitleItems = styled.p`
    font-size: 16px;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
`;

export const Input = styled(IMaskInput)`
    width: 470px;
    height: 50px;
    border-radius: 4px;
`;

export const ContainerPurchase = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media(max-width: 767px){
        width: 100%;
    }
`;

export const Items = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Checkout = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
`;

export const BookInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;  

    img{
        width: 48.88px;
    }
`;

export const ContainerButton = styled.button`
    background-color: transparent;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
`

export const Button = styled.button`
    background-color: #172B85;
    color: white;
    padding: 16px 48px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
`;