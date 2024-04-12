import { Container } from "./descontosStyle.jsx";

import PngPessoa from "../../../public/pessoa.png";
import PngGrafico from "../../../public/grafico.png";
import PngCaminhao from "../../../public/caminhao.png";
import PngCarrinho from "../../../public/carrinho.png";

export default function Descontos() {
  return (
    <>
      <Container>
        <div className="container">
          <h1>
            Aproveite! Livros com <span>50%</span> de desconto!
          </h1>
          <p>
            A promoção só se aplica para livros da categoria Desenvolvimento
            Pessoal.
          </p>
          <div className="container container-statistic">
            <div className="container-statistic pos1">
              <img src={PngPessoa} alt="Pessoa" />
              <div className="container-texts">
                <h2>1.245.333</h2>
                <p>Associados</p>
              </div>
            </div>
            <div className="container-statistic pos2">
              <img src={PngCaminhao} alt="Caminhao" />
              <div className="container-texts">
                <h2>52.126</h2>
                <p>Entregas Realizadas</p>
              </div>
            </div>
            <div className="container-statistic pos3">
              <img src={PngGrafico} alt="Gráfico" />
              <div className="container-texts">
                <h2>120.998</h2>
                <p>Colaboradores</p>
              </div>
            </div>
            <div className="container-statistic pos4">
              <img src={PngCarrinho} alt="Carrinho de compras" />
              <div className="container-texts">
                <h2>48.044</h2>
                <p>Compras Efetuadas</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
