import bookImg from "../../../public/roxoapontandodireita.png";
import {
  Container,
  Card,
  CardLeft,
  Title,
  SubTitle,
  ImageAlign,
  BigImage,
  MainContainerRight,
  MainContainerLeft,
  CardRight,
  BookImage,
} from "./categories";

export default function BooksSection() {
  return (
    <Container>
      <MainContainerLeft>
        <Card>
          <CardLeft>
            <Title>Desenvolvimento Pessoal</Title>
            <SubTitle>Compre Agora</SubTitle>
            <ImageAlign>
              <BigImage src={bookImg} alt="Livro Roxo Flutuando" />
            </ImageAlign>
          </CardLeft>
        </Card>
      </MainContainerLeft>
      <MainContainerRight>
        <Card>
          <CardRight>
            <BookImage src={bookImg} alt="Livro Roxo Flutuando" />
            <Title>Clássicos</Title>
            <SubTitle>Compre Agora</SubTitle>
          </CardRight>
        </Card>
        <Card>
          <CardRight>
            <BookImage src={bookImg} alt="Livro Roxo Flutuando" />
            <Title>Geek</Title>
            <SubTitle>Compre Agora</SubTitle>
          </CardRight>
        </Card>
      </MainContainerRight>
    </Container>
  );
}
