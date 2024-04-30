import styled from "styled-components";

export const Container = styled.section`
    padding: 30px;
    display: flex;
    align-items: center;
    gap: 40px;
    font-size: 14px;

    font-family: Arial, Helvetica, sans-serif;

    .container-image{
        width: 65%;

        img{
            width: 100%;
            height: 100%;
        }
    }

    .container-form{
        width: 34%;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        .input-email{
            width: 97%;

            input{ 
                width: 100%;
            }
        }

        .input-text{
            display: flex;
            flex-direction: column;
            width: 47%;
        }

        .input-checkbox{
            display: flex;
            gap: 10px;
        }

        input{
            border-radius: 8px;
            border: 1px solid;
            padding: 10px
        }

        button{
            width: 98%;
            background-color: #6236F5;
            border-radius: 8px;
            color: white;
            padding: 10px;
            cursor: pointer;
        }

        p{
            color:#999BA1;
        }

        span{
            color:#6236F5;
        }
        h2{
            width: 100%;
        }
    }

@media (min-width: 751px) and (max-width: 1150px){
    .container-image{
        display: none;
    }

    .container-form{
        width: 70%;
    }
}

@media (max-width: 750px){
    .container-image{
        display: none;
    }

    .container-form{
        flex-wrap: nowrap;
        flex-direction: column;
        width: 80%;

        .input-text, .input-email, button{
            width: 100%;
        }
    }
}
`;