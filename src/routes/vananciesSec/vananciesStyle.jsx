import styled from "styled-components";

export const Container = styled.section`
    min-height: 66vh;
    display: flex;
    padding: 30px;
    font-family: Arial, Helvetica, sans-serif;
    gap: 50px;
    flex-wrap: wrap;

    .content-text{
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
        width: 55%;
        display: flex;
        justify-content: center;

        img{
            width: 80%;  
        }
    }

@media (max-width: 1080px){
    justify-content: center;

    .content-text{
        width: 80%;
        align-items: center;

        h1{
            font-size: 20px;
        }

        button{
            width: 65%;
    }
}
    .content-image{
        width: 100%;

        img{
            width: 70%;  
        }
    }
}
`;