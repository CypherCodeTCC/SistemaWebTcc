import styled from "styled-components";

export const Container = styled.section`
     @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    display: flex;
    gap: 50px;
    padding: 30px;
    font-size: 23px;
    flex-wrap: wrap;
    justify-content: center;

    font-family: 'Poppins', sans-serif;;


    .container-image{
        width: 50%;
        
        .big-image{
            width: 100%;
        }
    }

    .container-text{
        width: 45%;
    }

    .content-title{
        display: flex;
        align-items: center;
        gap: 10px;
        padding-bottom: 10px;
    }

    summary{
        padding: 16px;
        background-color: #F3F3F3;
        border-radius: 8px;
        cursor: pointer;
    }
    
    details{
        padding-top: 20px;
    }

    ul{
        padding: 20px;
        font-size: 1.3rem;
    }

@media (min-width: 801px) and (max-width: 1150px){
    .container-image{
        display: none;
    }

    .container-text{
        width: 70%;
    }
}

@media (max-width: 800px){
    font-size: 20px;

    .container-image{
        display: none;
    }

    .container-text{
        width: 100%;
    }
}
`;