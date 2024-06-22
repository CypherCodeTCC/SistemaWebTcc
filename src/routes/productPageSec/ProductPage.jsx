import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CartContext from "../../context/cart/CartContext";

import PngImagem1 from "../../../public/produto1.png";
import PngImagem2 from "../../../public/produto2.png";
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

  const navigate = useNavigate();
  const [book, setBook] = useState({});
  const { id } = useParams();
  const { addToCart, cartItems } = useContext(CartContext); 
  const cartItemsAmount = cartItems[id];

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`https://node-routes-mysql.vercel.app/book/${id}`);
        setBook(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBook();
  }, [id]);

  return (
    <>
      <Container>
        {book.image && <img src={book.image.url} className="big-image" alt="Imagem do Produto" />}
        <div className="container-product-img">
          <img src={PngImagem1} alt="Imagem do Produto" />
          <img src={PngImagem2} alt="Imagem do Produto" />
          <img src={PngImagem2} alt="Imagem do Produto" />
          <img src={PngImagem2} alt="Imagem do Produto" />
          <img src={PngImagem2} alt="Imagem do Produto" />
        </div>
        <div className="container-text">
          <h2>{book.name}</h2>
          <Card avaliacoes={4} />
          <h2>R$ {book.price}</h2>
          <h3>Descrição</h3>
          <p>{book.synopsis}</p>
          <h4>Editoras</h4>
          <div className="container-images">
            <img src={PngRocco} alt="Editora Rocco" />
            <img src={PngWish} alt="Editora Wish" />
          </div>
          <div className="container-buttons">
            <button className="big-button" onClick={() => addToCart(book.id)}>
              <FaRegPlusSquare /> Adicionar ao carrinho
            </button>
            <button className="small-button" onClick={() => navigate('/cart')}>
              <IoCartOutline/>
              {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
            </button>
          </div>
          <button className="button-alone" onClick={() => navigate(`/produto/geral?genero=${book.genre.name}&editora=${book.publishing_company.name}&preco=`)}>Veja produtos semelhantes</button>
        </div>
      </Container>
    </>
  );
}
