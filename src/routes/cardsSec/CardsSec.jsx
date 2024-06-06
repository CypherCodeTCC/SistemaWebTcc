import { Container, Card, SubTitle } from "./cardsStyle";

export default function Cards() {
  return (
    <>
      <Container>
        <Card>
          <h2>Entrega Grátis</h2>
          <SubTitle>Pedidos acima de R$ 200,00</SubTitle>
        </Card>
        <Card>
          <h2>Dinheiro de Volta</h2>
          <SubTitle>Garantia de 30 dias</SubTitle>
        </Card>
        <Card>
          <h2>Pagamento Seguro</h2>
          <SubTitle>Certificado pela Visa</SubTitle>
        </Card>
        <Card>
          <h2>Atendimento 24/7</h2>
          <SubTitle>Suporte por telefone</SubTitle>
        </Card>
      </Container>
    </>
  );
}
