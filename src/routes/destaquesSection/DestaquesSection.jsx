import { useState } from "react";
import {
  Container,
  Title,
  MenuContainer,
  Button,
  Option,
  CardsContainer,
  Card,
  Imagem,
  CardTitle,
  CardSubTitle,
  Fileira,
  CardPrincipal,
  CardsSecundarios,
  BigCard,
} from "./destaques.jsx";

function DestaquesSection() {
  const [lastClickedButton, setLastClickedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    console.log(buttonId, '| teste')
    setLastClickedButton(buttonId);
  };

  return (
    <Container>
      <Title>Destaques</Title>
      <MenuContainer>
       {[1, 2, 3, 4, 5].map((item) => (
        <Button
          key={item}
          onClick={() => handleButtonClick(item)}
          style={{
            backgroundColor: lastClickedButton === item ? "black" : "",
            color: lastClickedButton === item ? "white" : ""
          }}
        >
          <Option>Livros</Option>
        </Button>
      ))}
      </MenuContainer>
      <CardsContainer>
        <CardPrincipal>
          <BigCard>
            <Imagem />
            <CardTitle>Hello World</CardTitle>
            <CardSubTitle>Descriçao especial + desconto</CardSubTitle>
          </BigCard>
        </CardPrincipal>
        <CardsSecundarios>
          {[1, 2].map((row) => (
            <Fileira key={row}>
              {[1, 2].map((col) => (
                <Card key={col}>
                  <Imagem />
                  <CardTitle>Hello World!</CardTitle>
                </Card>
              ))}
            </Fileira>
          ))}
        </CardsSecundarios>
      </CardsContainer>
    </Container>
  );
}

export default DestaquesSection;
