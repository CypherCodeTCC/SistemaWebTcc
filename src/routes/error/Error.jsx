import { useNavigate } from "react-router-dom";
import { Container, HomeButton, Subtitle, Title } from "./errorStyle";

const Error = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Página não encontrada</Subtitle>
      <HomeButton onClick={() => navigate("/")}>
        Ir para a pagina principal
      </HomeButton>
    </Container>
  );
};

export default Error;
