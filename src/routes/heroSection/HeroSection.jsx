import "./heroSection.css";
import image from "../../../public/azulDeitado.png";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
      <header className="mainHeading">
        <div className="mainHeading__content">
          <article className="mainHeading__text">
            <p className="mainHeading__preTitle">Lorem</p>
            <h2 className="mainHeading__title">Lorem de Ipsur</h2>
            <p className="mainHeading__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque et mi nec neque fermentum vehicula.
            </p>
            <button className="cta" onClick={() => navigate("/produto/geral")}>
              Explorar opções
            </button>
          </article>

          <figure className="mainHeading__image">
            <img src={image} alt="Livro azul flutuante" />
          </figure>
        </div>
      </header>
    </>
  );
}

export default HeroSection;
