import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CartContext from "../../context/cart/CartContext";

import PngRocco from "../../../public/rocco.png";
import PngWish from "../../../public/wish.png";
import PngCdl from "../../../public/cialetra.png";

import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { Container } from "./productStyle";

function AvaliacaoAleatoria() {
  return Math.floor(Math.random() * 2) + 4;
}

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
        const res = await axios.get(
          `https://node-routes-mysql.vercel.app/book/${id}`
        );
        const res_book = res.data;
        let bookWithDiscount = {...res_book};

        if(res_book.genre.name === "Dev. Pessoal"){
          const novoPreco = res_book.price * 0.5;
          bookWithDiscount = {
            ...bookWithDiscount,
            price: novoPreco,
          };
        }

        const bookWithRatings = {
          ...bookWithDiscount,
          avaliacoes: AvaliacaoAleatoria(),
        }
        
        setBook(bookWithRatings);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBook();
  }, [id]);

  console.log(book);

  return (
    <>
      <Container>
        {book.image && (
          <img
            src={book.image.url}
            className="big-image"
            alt="Imagem do Produto"
          />
        )}
        <div className="container-text">
          <h2>{book.name}</h2>
          <Card avaliacoes={book.avaliacoes} />
          <h2>R$ {book.price && book.price.toFixed(2)}</h2>
          <h3>Descrição</h3>
          <p>{book.synopsis}</p>
          <h4>Editoras</h4>
          <div className="container-images">
            {book.publishing_company && book.publishing_company.name === "Editora Rocco" ? (
              <img src={PngRocco} alt="Editora Rocco" />
            ) : book.publishing_company && book.publishing_company.name === "Editora Wish" ? (
              <img src={PngWish} alt="Editora Wish" />
            ) : (
              <img src={PngCdl} alt="Companhia das Letras" />
            )}
          </div>
          <div className="container-buttons">
            <button className="big-button" onClick={() => addToCart(book.id)}>
              <FaRegPlusSquare /> Adicionar ao carrinho
            </button>
            <button className="small-button" onClick={() => navigate("/cart")}>
              <IoCartOutline />
              {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
            </button>
          </div>
          <button
            className="button-alone"
            onClick={() =>
              navigate(
                `/produto/geral?genero=${book.genre.name}&editora=${book.publishing_company.name}&preco=`
              )
            }
          >
            Veja produtos semelhantes
          </button>
        </div>
      </Container>
    </>
  );
}
