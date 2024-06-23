import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from{
    transform: rotate(0deg);
  } 
  to{
    transform: rotate(360deg);
  } 
`;

export const Spinner = styled.section`
    margin: 100px auto;
    text-align: center;
    display: flex;
    width: 40px;
    height: 40px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #000;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;