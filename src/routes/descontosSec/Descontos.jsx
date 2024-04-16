import { Container } from "./descontosStyle.jsx";

import PngPessoa from "../../../public/pessoa.png";
import PngGrafico from "../../../public/grafico.png";
import PngCaminhao from "../../../public/caminhao.png";
import PngCarrinho from "../../../public/carrinho.png";
import SvgLivros from "../../../public/livrosEmpilhados.svg";

export default function Descontos() {
  return (
    <>
      <Container>
       <div className="container-content">
        <div className="main-container-left">
          <div className="container-text">
            <h1>Aproveite! Livros com <span>50%</span> de desconto!</h1>
            <p>A promoção só se aplica para livros da categoria Desenvolvimento Pessoal.</p>
          </div>
          <div className="card card-left">
            <img src={PngPessoa} className="card-image" alt="Pessoa"/>
            <h1>1.245.333</h1>
            <p>Associados</p>
          </div>
          <div className="card card-left">
            <img src={PngGrafico} className="card-image" alt="Gráfico"/>
            <h1>120.998</h1>
            <p>Colaboradores</p>
          </div>
          <div className="card card-left">
            <img src={PngCaminhao} className="card-image" alt="Caminhao"/>
            <h1>52.126</h1>
            <p>Entregas</p>
          </div>
          <div className="card card-left">
            <img src={PngCarrinho} className="card-image" alt="Carrinho"/>
            <h1>48.044</h1>
            <p>Compras Efetuadas</p>
          </div>
        </div>
        <div className="main-container-right">
        <div className="card-right">
          <img src={SvgLivros} className="big-image" alt="Livros Empilhados"/>
        </div>
        </div>
       </div>
      </Container>
    </>
  );
}
