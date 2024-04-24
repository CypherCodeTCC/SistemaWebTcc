import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 30px;
    gap: 80px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;

    .container-image{
        width: 55%;
        display: flex;
        justify-content: center;

        .library-image{
            object-fit: cover;
            width: 100%;
        }
    }

    .container-text{
        display: flex;
        flex-direction: column;
        width: 35%;

        span{
            color: #172B85;
        }

        h1{
            padding-bottom: 30px;
            font-size: 35px;
        }
    }

    .content-checked{
        display: flex;
        gap: 15px;
        align-items: center;
        padding-top: 30px;
        
        img{
            width: 30px;
        }      
    }

@media (max-width: 1000px){
    .container-image{
        width: 100%;
    }

    .container-text{
        width: 90%;

        h1{
            padding-bottom: 30px;
            font-size: 25px;
        }
    }
}
`;