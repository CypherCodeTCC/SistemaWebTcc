import styled from "styled-components";

/* DEIXANDO TODAS AS DIVS ALINHADAS E NO CENTRO DA TELA */ 
export const Container = styled.section`
    display: flex;
    justify-content: center;
`;

export const Div = styled.div`   
    /* ESTILIZANDO PARA QUE A DIV DE DESENVOLVIMENTO FIQUE "SOZINHA" NO SENTIDO VERTICAL */
    .cards-devpessoal{
        display: flex;
        width: 100%;
        height: 100%;
    }

    /* DIVS CLASSIC E GEEK EM FORMATOS DE COLUNA */ 
    .cards-classicgeek{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 50%;
    }
    
    .card-devpessoal{
        width: 450px;
        height: 510px;      
        background-image: linear-gradient(to top, #F2F0F1 20%, #F2F0F1 100%);
        border-radius: 8px;
        padding: 30px;
        margin: 10px;
    }

    .card-classic, .card-geek{
        width: 450px;
        height: 250px;
        background-image: linear-gradient(to top, #F2F0F1 20%, #F2F0F1 100%);
        border-radius: 8px;
        padding: 20px;
        margin: 10px
        
    }
`

export const Figure = styled.figure`
    /* DEFININDO ESPAÇO DA DIV PAI */
    
    width: 100%;
    height: 90%;
    margin-top: 10px;

    /* OCUPANDO TODO O ESPAÇO DA DIV PAI */ 
    .imageDev{   
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /* POSICIONANDO A IMAGEM DENTRO DA DIV */ 
    .imageClassic, .imageGeek{
        position: relative;
        bottom: 20px;
        left: 50px;
        width: 100%;
        height: 130%;
    }
`

export const H1 = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    overflow-wrap: break-word;
    width: 250px;

    .card-devpessoal h1{
        text-align: left;
    }

    .card-classic h1, .card-geek h1{
        position: absolute;

    }
`

export const H5 = styled.h5`
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 10px;
    text-decoration: underline;
`