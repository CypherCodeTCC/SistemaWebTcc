import styled from "styled-components";

export const ContainerMobile = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    min-height: 80vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const ContainerTextMobile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #999BA1;
    height: 69px;
`;

export const ContainerOptionsMobile = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ButtonOptionsMobile = styled.button`
    background-color: ${(props) => (props.isActive ? '#000000' : '#FFFFFF')};
    color: ${(props) => (props.isActive ? '#FFFFFF' : '#000000')};
    font-size: 16px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    padding: 8px;
    width: 50%;
    cursor: pointer;
    transition: 0.5s;
`;

export const TitleMobile = styled.h1`
    font-size: 24px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;
`;

export const FormDataMobile = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px;
    gap: 20px;
`;

export const SubTitleMobile = styled.p`
    font-size: 14px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
`;

export const InputMobile = styled.input`
    padding: 12px;
    width: 100%;
    height: 40px;
    border: 1px solid #A9A9A9;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
`;

export const ContainerPasswordMobile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ContainerButtonMobile = styled.button`
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
`

export const ButtonMobile = styled.button`
    width: 80%;
    background-color: #171F1D;
    height: 40px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;    
    cursor: pointer;
`;