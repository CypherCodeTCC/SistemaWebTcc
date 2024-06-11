import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 40px;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px 32px;
  gap: 16px;
  border-radius: 8px;
  background: rgba(208, 208, 208, 0.3);
`;

export const Title = styled.p`
  font-family: 'Poppins'; 
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #141718;
`;

export const SubTitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #6C7275;
`;
