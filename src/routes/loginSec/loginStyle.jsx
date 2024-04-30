import styled from "styled-components";

export const Container = styled.section`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;

    font-family: Arial, Helvetica, sans-serif;

    .container-image{
        width: 65%;
    }

    .container-form{
        width: 30%;
        display: flex;
        flex-direction: column;
        gap: 15px;

        p{
            color: #999BA1;
            font-size: 15px;
        }

        .center{
            text-align: center;
        }

        button{
            border-radius: 8px;
            padding: 7px;
            cursor: pointer;
        }

        .btn-login{
            background-color: #6236F5;
            color: white;
            padding: 10px
        }

        input{
            border-radius: 8px;
            border: 1px solid;
            padding: 10px
        }

        span{
            color:#6236F5;
            cursor: pointer;
        }
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

@media (min-width: 801px) and (max-width: 1150px){
    .container-image{
        display: none;
    }

    .container-form{
        width: 70%;
    }
}

@media (max-width: 800px){
    .container-image{
        display: none;
    }

    .container-form{
        width: 80%;
    }
}
`;