import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    padding: 30px;
    font-family: Arial, Helvetica, sans-serif;
    gap: 50px;
    flex-wrap: wrap;

    .content-text{
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        word-wrap: break-word;
        width: 500px;
        gap: 20px;

        button{
            background-color: black;
            color: white;
            width: 35%;
            padding: 10px;
            border-radius: 18px;
        }
    }

    .content-image{
        width: max-content;
        min-width: 50%;

        img{
            object-fit: contain;
            width: 100%;  
            height: 675px;
        }
    }

@media (max-width: 1360px){
    justify-content: center;
    
    .content-text{
        align-items: center;

        h1{
            font-size: 20px;
        }
    }
}
`;