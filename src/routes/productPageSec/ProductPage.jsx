import PngImagem1 from "../../../public/produto1.png";
import PngImagem2 from "../../../public/produto2.png";
import PngImagem3 from "../../../public/produto3.png";
import PngRocco from "../../../public/rocco.png";
import PngWish from "../../../public/wish.png";

import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { Container } from "./productStyle";

export default function ProductPage() {
  //FUNÇÃO PARA ATRIBUIR AS ESTRELAS AO COMPONENTE. LAÇO CRIADO PARA SEMPRE PINTAR AS ESTRELAS DE ACORDO COM O NUMERO DA AVALIAÇÃO.
  function Avaliacoes({ avaliacao }) {
    const estrelas = [];

    for (let i = 0; i < 5; i++) {
      if (i < avaliacao) {
        estrelas.push(<FaStar key={i} color="black" />);
      } else {
        estrelas.push(<FaStar key={i} color="lightgray" />);
      }
    }

    return <div>{estrelas}</div>;
  }

  function Card({ avaliacoes }) {
    return (
      <>
        <Avaliacoes avaliacao={avaliacoes}></Avaliacoes>
      </>
    );
  }

  return (
    <>
      <Container>      
        <img src={PngImagem3} className="big-image" alt="Imagem do Produto" />
        <div className="container-product-img">
          <img src={PngImagem1} alt="Imagem do Produto" />
          <img src={PngImagem2} alt="Imagem do Produto" />
          <img src={PngImagem2} alt="Imagem do Produto" />
          <img src={PngImagem2} alt="Imagem do Produto" />
          <img src={PngImagem2} alt="Imagem do Produto" />
        </div>   
        <div className="container-text">
          <h2>O livro dos livros</h2>
          <Card avaliacoes={4} />
          <h2>R$ 999,99</h2>
          <h3>Descrição</h3>
          <p>
            Pellentesque condimentum lorem vitae justo congue, ut semper nisi
            gravida. Sed viverra nibh eget tincidunt convallis.
          </p>
          <h4>Editoras</h4>
          <div className="container-images">
            <img src={PngRocco} alt="Editora Rocco" />
            <img src={PngWish} alt="Editora Wish" />
          </div>
          <div className="container-buttons">
            <button className="big-button">
              <FaRegPlusSquare /> Adicionar ao carrinho
            </button>
            <button className="small-button">
              <IoCartOutline />
            </button>
          </div>
          <button className="button-alone">Veja produtos semelhantes</button>
        </div>
      </Container>
    </>
  );
}
