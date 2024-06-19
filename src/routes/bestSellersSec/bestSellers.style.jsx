import styled from "styled-components";

// Cards
export const CardContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  //padding: 0px 0px 40px 15%;
  max-width: 400px;
  min-width: 150px;
  cursor: pointer; // largura mínima para evitar que o card diminua absurdamente

  @media (max-width: 600px) {
    min-width: 200px; // ajusta a largura mínima para telas menores
  }
`;

export const Imagem = styled.img`
  max-width: 100%;
  height: 300px;
  //background: rgba(208, 208, 208, 0.35);
  object-fit: contain;
`;

export const Avaliacoes = styled.div`
  margin-top: 12px;
  color: #f8e825;
  font-size: 14px;
`;

export const NomeLivro = styled.p`
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  font-size: 13.5px;
  color: #000;
  margin-top: 12px;
  font-weight: 600;
`;

export const NomeAutor = styled.p`
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #000;
  font-weight: 600;
  margin-top: 12px;
`;

export const PrecoLivro = styled.p`
  box-sizing: border-box;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #121212;
  margin-top: 12px;
`;

//Container
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const Titulo = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 44px;
  letter-spacing: -0.4px;
  color: #000000;

  @media (min-width: 319px) and (max-width: 600px) {
    font-size: 1.8rem;
    margin-top: 12px;
  }

  @media (min-width: 601px) and (max-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 2rem;
  }
`;

export const Fileira = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); /* Colunas auto-ajustáveis */
  justify-content: space-between;
  justify-items: center;
  gap: 50px; /* Espaçamento entre os itens */
  width: 91.8%;
  overflow-x: auto; /* Torna a fileira rolável horizontalmente */

  @media (max-width: 768px) {
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
  }
`;
