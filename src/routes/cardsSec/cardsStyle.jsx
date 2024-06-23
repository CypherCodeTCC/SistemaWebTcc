import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 40px;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  width: 16.5%;
  height: 24vh;
  flex-direction: column;
  align-items: flex-start;
  padding: 36px 36px;
  gap: 15%;
  background: rgba(208, 208, 208, 0.3);

  @media (max-width: 1550px) {
    gap: 10%;
  }
  @media (max-width: 1300px) {
    gap: 8%;
    height: auto;
    padding-left: 20px;
  }
  @media (max-width: 1050px) {
    width: 33%;
    gap: 2%;
  }

  @media (max-width: 580px) {
    width: 70%;
  }
  @media (max-width: 580px) {
    width: 80%;
  }
`;

export const Title = styled.p`
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 500;
  font-size: 135%;
  line-height: 28px;
  color: #141718;
  word-wrap: break-word;
  white-space: nowrap;

  @media (max-width: 1650px) {
    font-size: 18px;
  }
  @media (max-width: 1350px) {
    font-size: 17px;
  }
  @media (max-width: 1200px) {
    font-size: 15px;
  }

  @media (max-width: 1050px) {
    font-size: 25px;
    margin-bottom: 15px;
  }

  @media (max-width: 940px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 580px) {
    font-size: 24px;
  }
  @media (max-width: 420px) {
    font-size: 20px;
  }
  @media (max-width: 350px) {
    font-size: 16px;
  }
`;

export const SubTitle = styled.p`
  font-family: "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 95%;
  line-height: 24px;
  color: #6c7275;
  word-wrap: break-word;
  white-space: nowrap;

  @media (max-width: 1650px) {
    font-size: 81%;
  }
  @media (max-width: 1350px) {
    font-size: 12px;
  }
  @media (max-width: 1200px) {
    font-size: 10px;
  }

  @media (max-width: 1050px) {
    font-size: 15px;
  }
  @media (max-width: 800px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
  @media (max-width: 580px) {
    font-size: 15px;
  }
  @media (max-width: 420px) {
    font-size: 14px;
  }
  @media (max-width: 350px) {
    font-size: 12px;
  }
`;
