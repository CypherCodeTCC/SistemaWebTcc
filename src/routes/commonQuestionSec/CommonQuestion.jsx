import BookPng from "../../../public/book.png";
import FacPng from "../../../public/fac.png";
import {
  BigImage,
  Container,
  ContainerImage,
  ContainerText,
  ContentTitle,
  Details,
  Summary,
} from "./commonStyle";

export default function CommonQuestion() {
  return (
    <>
      <Container>
        <ContainerImage>
          <BigImage src={BookPng} alt="livrao" />
        </ContainerImage>
        <ContainerText>
          <ContentTitle>
            <img src={FacPng} />
            <p>FAC</p>
          </ContentTitle>
          <h1>Perguntas Frequentes</h1>
          <Details>
            <Summary>Smod tempor incididunt ut labore et dolore</Summary>
            <ul>
              <li>Hello</li>
              <li>World</li>
            </ul>
          </Details>
          <Details>
            <Summary>Smod tempor incididunt ut labore et dolore</Summary>
            <ul>
              <li>Hello</li>
              <li>World</li>
            </ul>
          </Details>
          <Details>
            <Summary>Smod tempor incididunt ut labore et dolore</Summary>
            <ul>
              <li>Hello</li>
              <li>World</li>
            </ul>
          </Details>
        </ContainerText>
      </Container>
    </>
  );
}
