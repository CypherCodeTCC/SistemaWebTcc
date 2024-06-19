import styled, { keyframes } from "styled-components";

export const ContainerDesc = styled.div`
  padding: 50px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const cardAnimation = keyframes`
  from {
    transform: scale(0.95);
    opacity: 0.8;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const ContentDesc = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  animation: ${cardAnimation} 1.9s ease-in-out;

  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const iconAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const DescIcon = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  animation: ${iconAnimation} 0.5s ease-in-out;
`;

export const SectionDesc = styled.section`
  margin: 0 20px;
  padding-top: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 50px;
  gap: 20px;
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  border-radius: 18px;
  flex: none;
  order: 0;
  flex-grow: 0;

  @media (max-width: 1024px) {
    width: 33%;
    padding: 0;
    gap: 10px;
  }
  @media (max-width: 768px) {
    padding: 15px 20px;
    width: 100%;
  }
`;

export const TitleDesc = styled.h1`
  font-size: 40px;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-weight: normal;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const SpanDesc = styled.span`
  color: #172b85;
`;

export const LeftDesc = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  background-color: #fff;
  width: 300px;
  height: auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const CenterDesc = styled(LeftDesc)``;

export const RightDesc = styled(LeftDesc)``;

export const DescP = styled.p`
  font-family: "Poppins", sans-serif;
  color: #020200;
  overflow-wrap: break-word;
  width: 100%;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 2;
  }
`;

export const DescH2 = styled.h2`
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  color: #333;
  letter-spacing: 0.1px;
  margin-top: 0.6em;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const DescImg = styled.img`
  margin: 0 auto;
  display: block;
  max-width: 100%;

  @media (max-width: 480px) {
  }
`;
