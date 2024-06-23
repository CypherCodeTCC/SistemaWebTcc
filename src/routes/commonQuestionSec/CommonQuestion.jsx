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
            <Summary>Vocês oferecem opções de frete grátis?</Summary>
            <ul>
              <li>Sim, oferecemos frete grátis para todas as compras realizadas.</li>
            </ul>
          </Details>
          <Details>
            <Summary>Quais são as opções de pagamento aceitas?</Summary>
            <ul>
              <li>Aceitamos pagamentos por cartão de crédito, débito e boleto bancário, oferecendo segurança e praticidade em todas as transações.</li>
            </ul>
          </Details>
          <Details>
            <Summary>Qual é a política de devolução?</Summary>
            <ul>
              <li>Aceitamos devoluções dentro de um prazo determinado para troca ou reembolso, sujeito a condições específicas.</li>
            </ul>
          </Details>
        </ContainerText>
      </Container>
    </>
  );
}
