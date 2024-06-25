import styled from "styled-components";

export const Container = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  min-height: 80vh;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  text-align: center;
  padding: 15px;
  font-size: 24px;
  font-weight: 500;
  gap: 10px;
`;

export const Carousel = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`

export const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.5 ease;
`;

export const CarouselItem = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 15px;
  text-align: center;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 600px;
  cursor: pointer;
  filter: sepia(50%);
`;

export const Details = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;

  &.show {
    display: flex;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  text-align: center;
`;

export const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? 'blue' : 'gray')};
  margin: 0 5px;
  cursor: pointer;
`;