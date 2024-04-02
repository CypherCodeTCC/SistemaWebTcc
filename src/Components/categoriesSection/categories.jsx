import styled from "styled-components";

export const Container = styled.section`
    background-image: #ffffff;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Div = styled.div`    
    .cards{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    
    .card-devpessoal{
        width: 350px;
        height: 400px;      
        background-color: gray;
        border-radius: 8px;
        padding: 20px;
        margin: 10px;
    }

    .card-classic, .card-geek{
        width: 450px;
        height: 200px;
        background-color: gray;
        border-radius: 8px;
        padding: 20px;
        display: flex;
        margin: 10px;
    }
`