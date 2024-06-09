import styled from "styled-components";

export const Container = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    min-height: 80vh;
    display: flex;
    padding: 60px;
    background-color: #F2F0F1;
    gap: 100px;
`;

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 20%;
    text-align: right;
`;

export const ContainerSubTitle = styled.p`
    font-size: 16px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
`;

export const ContainerSubTitleBlue = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => (props.isActive ? '#172B85' : '#000000')};
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
`

export const Title = styled.h1`
    font-size: 24px;
    color: #FFFFFF;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
`;

export const SubTitle = styled.p`
    font-size: 16px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
`;

export const FormUser = styled.div`
    padding: 30px;
    display: flex;
    width: 60%;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    background-color: white;
    border-radius: 4px;
`;

export const TitleForm = styled.h1`
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #172B85;
`;

export const Input = styled.input`
  width: 100%;  
  height: 50px;
  background-color: #F5F5F5;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  padding: 12px;
`;

export const Password = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
`

export const InputText = styled.div`
    width: 45%;
    height: max-content;
    flex-grow: 1;
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 50px;
`;

export const Cancelar = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: #172B85;
  font-size: 16px;
  font-weight: 500;
  color: #FAFAFA;
  padding: 16px 48px 16px 48px;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
`;