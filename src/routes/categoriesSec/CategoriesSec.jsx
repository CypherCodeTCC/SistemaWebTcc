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
  return (
    <Container>
      <MainContainerLeft>
        <Card>
          <CardLeft>
            <Title>Desenvolvimento Pessoal</Title>
            <SubTitle onClick={() => navigate("/produto/geral?genero=Terror")}>
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
          <CardRight>
            <BookImage src={bookImg3} alt="Livro Roxo Flutuando" />
            <Title>Clássicos</Title>
            <SubTitle
              onClick={() => navigate("/produto/geral?genero=Suspense")}
            >
              Compre Agora
            </SubTitle>
          </CardRight>
        </Card>
        <Card>
          <CardRight>
            <BookImage src={bookImg} alt="Livro Roxo Flutuando" />
            <Title>Geek</Title>
            <SubTitle
              onClick={() => navigate("/produto/geral?genero=Suspense")}
            >
              Compre Agora
            </SubTitle>
          </CardRight>
        </Card>
      </MainContainerRight>
    </Container>
  );
}
