import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
`;

export const Div = styled.div`    
    .cards-devpessoal{
        display: flex;
        width: 100%;
        height: 100%;
    }

    .cards-classicgeek{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 50%;
        background-color: black;
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