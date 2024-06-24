import bookImg from "../../../public/roxoapontandodireita.png";
import bookImg2 from "../../../public/livro2.png";
import bookImg3 from "../../../public/livro3.png";
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
import { useNavigate } from "react-router-dom";

export default function BooksSection() {
  const navigate = useNavigate();

  const handleRoutes = (route) => {
    navigate(route);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <MainContainerLeft>
        <Card>
          <CardLeft onClick={() => handleRoutes("/produto/geral?genero=Dev.%20Pessoal&editora=&preco=")}>
            <Title>Desenvolvimento Pessoal</Title>
            <SubTitle>
              Compre Agora
            </SubTitle>
            <ImageAlign>
              <BigImage src={bookImg2} alt="Livro Roxo Flutuando" />
            </ImageAlign>
          </CardLeft>
        </Card>
      </MainContainerLeft>
      <MainContainerRight>
        <Card>
          <CardRight onClick={() => handleRoutes("/produto/geral?genero=Classico&editora=&preco=")}>
            <BookImage src={bookImg3} alt="Livro Roxo Flutuando" />
            <Title>Clássicos</Title>
            <SubTitle>
              Compre Agora
            </SubTitle>
          </CardRight>
        </Card>
        <Card>
          <CardRight onClick={() => handleRoutes("/produto/geral?genero=Geek&editora=&preco=")}>
            <BookImage src={bookImg} alt="Livro Roxo Flutuando" />
            <Title>Geek</Title>
            <SubTitle>
              Compre Agora
            </SubTitle>
          </CardRight>
        </Card>
      </MainContainerRight>
    </Container>
  );
}
