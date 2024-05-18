import styled from "styled-components";
import bookImg from "/roxoapontandodireita.png";

// Container principal
export const Container = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 1.5625rem;
`;

// Container para os cartões
export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 0.8em 7.8125rem;

  @media (max-width: 58.75rem) {
    flex-direction: column;
    gap: 0.625rem 0px;
  }
`;

// Container para o cartão CardPrincipal
export const CardPrincipal = styled.div`
  width: 50%;
`

// Container para os cartões secundários
export const CardsSecundarios = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.25rem;
`

// Container para uma fileira de cartões
export const Fileira = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.25rem;
`;

// Cartão grande
export const BigCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5625rem;

  width: calc(100% - 0.625rem);
  height: 100%;
  border-radius: 1.5rem;
  background-image: linear-gradient(to top, #f2f0f1 20%, #f2f0f1 100%);
  padding: 1.25rem;

  &:hover {
    cursor: pointer;
    background-image: linear-gradient(to top, #cecbcc 20%, #bdbabc 100%);
  }
`

// Cartão padrão
export const Card = styled.div`
  width: calc(45% - 0.625rem);
  border-radius: 1rem;
  background-image: linear-gradient(to top, #f2f0f1 20%, #f2f0f1 100%);
  padding: 4.6875rem;

  &:hover {
    cursor: pointer;
    background-image: linear-gradient(to top, #cecbcc 20%, #bdbabc 100%);
  }
`;

// Título da seção
export const Title = styled.div`
  font-size: 1.8rem;
  margin: 1rem;
  font-weight: 700;
  text-align: center;
`;

// Container do menu
export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Botão do menu
export const Button = styled.button`
  position: relative;
  background-color: transparent;
  font-size: 1rem;
  padding: 0.5rem 2.5rem;
  font-weight: 600;
  overflow: hidden;
  border-radius: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
  }
`;

// Opção do menu
export const Option = styled.a`

`;

// Imagem do cartão
export const Imagem = styled.img.attrs({
  src: `${bookImg}`, 
})`
  object-fit: contain;
  width: 100%;
  height: 8rem;

  &.big-image {
    height: 15.625rem;

    @media (max-width: 58.75rem) {
      height: 12.5rem;
    }
  }
`;

// Título do cartão
export const CardTitle = styled.h1`
  font-size: 1.125rem;
`;

// Subtítulo do cartão
export const CardSubTitle = styled.p`
  font-size: 0.75rem;
`;