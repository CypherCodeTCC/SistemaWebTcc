import styled from "styled-components";

export const Footer = styled.section`
    background-color: black;
    color: white;
    display: flex;
    padding: 60px;
    gap: 40px;
    justify-content: center;

    font-family: Arial, Helvetica, sans-serif;

    flex-wrap: wrap;

    .container-aboutUs, .container-client, .container-social-media, .container-know-more, .container-payment{
        width: 200px;
    }

    .container-rights-reserved{
        width: 100%;
        text-align: center;
    }

    .client{
        display: flex;
    
    img {
      width: 35px;
      padding-top: 10px;
    }
        
    p {
      padding-left: 10px;
    }
    }

    .logo-image{
        width: 100px;
    }

    button{
        background-color: transparent;
        padding-top: 15px;
        text-decoration: underline;
        color: gray;
    }

    p{
        padding-top: 15px;
        color: gray;
    }

    button:hover{
        cursor:pointer;
        transform: scale(1.1);
        transition: 0.5s;
    }

@media (max-width: 1300px){
    text-align: center;
}
`;