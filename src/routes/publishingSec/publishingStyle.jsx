import styled from "styled-components";



export const Container = styled.section`
    padding:30px;
    width: 90%;
    margin: auto;
    font-family: Arial, Helvetica, sans-serif;

    h1{
        text-align: center;
        font-size: 25px;
    }
    
    span{
        color: #172B85;
    }

    .container-cards{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        padding-top: 20px;
    }

    .card-image{
        display: flex;
        justify-content: center;
    }

   .wish-image, .rocco-image, .cia-image{
    width: 300px;
   }

    .cards{
        flex-grow: 1;
        height: max-content;
        width: 350px;
        padding: 20px;
        text-align: center;

        h2, p{
            padding-top: 20px;
        }
    }
`;