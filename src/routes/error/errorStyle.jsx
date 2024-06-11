import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

export const animate = keyframes`
  0% { transform: translateY(-20px); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(-20px); }
`;

export const Title = styled.h1`
  color: #020233;
  font-size: 5em;
  animation: ${animate} 1.5s ease-in-out infinite;
`;

export const Subtitle = styled.h2`
  color: #020233;
  margin: 20px 0;
`;

export const HomeButton = styled.button`
  padding: 10px 40px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  border: 1px solid #333;
  border-radius: 16px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;
  font-family: "Segoe UI", sans-serif;

  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;
