import styled from "styled-components";

export const Container = styled.section`
    background-color: #000000;
    display: flex;
    justify-content: center;
`;

export const Div = styled.div`    
    .content{
        display: flex;
        justify-content: center;
        width: 100%;
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
        width: 350px;
        height: 200px;
        background-color: gray;
        border-radius: 8px;
        padding: 20px;
        margin: 10px;
    }
`