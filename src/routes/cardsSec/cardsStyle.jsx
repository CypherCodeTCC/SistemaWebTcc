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
  width: 16.8%;
  height: 24vh;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 52px;
  gap: 40px;
  background: rgba(208, 208, 208, 0.3);
`;

export const Title = styled.p`
  font-family: 'Segoe UI'; 
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 28px;
  color: #141718;
`;

export const SubTitle = styled.p`
  font-family: 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #6C7275;
`;
