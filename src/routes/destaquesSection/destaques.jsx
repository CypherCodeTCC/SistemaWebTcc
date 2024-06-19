import styled from "styled-components";

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
  margin: 0.8em 8rem;
  gap: 1.25rem;

  @media (max-width: 58.75rem) {
    flex-direction: column;
    margin: 0.8em 0.625rem;
  }

  @media (max-width: 767px) {
    margin: 0;
    padding: 1.875rem;
  }
`;

// Container para os cartões secundários
export const CardsSecundarios = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.25rem;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

// Container para uma fileira de cartões
export const Fileira = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.25rem;
`;

// Cartão padrão
export const Card = styled.div`
  width: 280px; /* largura do cartão */
  height: 425px; /* altura do cartão */
  border-radius: 1rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; /* para habilitar o scroll */

  &:hover {
    cursor: pointer;
    background-image: linear-gradient(to top, #cecbcc 20%, #bdbabc 100%);
  }

  @media (max-width: 768x) {
    width: 100%; /* largura total em telas menores */
    padding: 1.875rem;
    height: auto; /* altura automática para conteúdo responsivo */
    max-height: 425px; /* altura máxima para manter consistência */
    overflow-x: auto;
    display: flex;
    
  }

`;

// Imagem do cartão
export const Imagem = styled.img`
  width: 185px; /* largura da imagem */
  height: 275px; /* altura da imagem */
  object-fit: cover;
  margin-bottom: 1rem; /* margem inferior para separar do texto */

  @media (max-width: 767px) {
    width: 100%; /* largura total em telas menores */
    height: auto; /* altura automática para conteúdo responsivo */
  }
`;

// Título do cartão
export const CardTitle = styled.h1`
  font-size: 1.125rem;
  margin-top: 1rem;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 1rem;
    overflow-x: auto;
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

  @media (max-width: 500px) {
    width: 60%;
    overflow-x: auto;
    white-space: nowrap;
    overflow-x: auto;
  }
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

  @media (max-width: 650px) {
    font-size: 0.9rem;
    padding: 1rem;
  }

  @media (max-width: 500px) {
    font-size: 0.9rem;
    padding: 1rem;
  }

  @media (max-width: 374px) {
    font-size: 0.9rem;
    padding: 1rem;
  }
`;

// Opção do menu
export const Option = styled.a``;
// card height 425 width 280, imagem tamanho width 185 height 275, deve manter essa margem e ser scrollavel