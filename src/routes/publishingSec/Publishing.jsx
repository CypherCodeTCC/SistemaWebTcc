import { Container } from "./publishingStyle";

import SvgCiaLetras from "../../../public/cialetra.png";
import SvgRocco from "../../../public/rocco.png";
import SvgWish from "../../../public/wish.png";

export default function Publishing() {
    return (
        <>
            <Container>
                <h1>Nossas <span>Editoras</span></h1>
                <div className="container-cards">
                    <div className="cards">
                        <div className="card-image">
                            <img src={SvgCiaLetras} className="cia-image" alt="Editora Companhia das Letras"/>
                        </div>
                        <h2>Companhia das Letras</h2>
                        <p>A editora Companhia das Letras destaca-se no cenário editorial brasileiro e internacional como uma referência de qualidade e diversidade literária.</p>
                    </div>
                    <div className="cards">
                        <div className="card-image">
                            <img src={SvgRocco} className="rocco-image" alt="Editora Rocco"/>
                        </div>
                        <h2>Editora Rocco</h2>
                        <p>A editora Rocco se destaca no cenário editorial pela sua meticulosa seleção de obras que enriquecem o panorama literário.</p>
                    </div>
                    <div className="cards">
                        <div className="card-image">
                            <img src={SvgWish} className="wish-image" alt="Editora Wish"/>
                        </div>
                        <h2>Editora Wish</h2>
                        <p>A Wish é conhecida por promover histórias que exploram diferentes gêneros e temáticas, sempre buscando inspirar e emocionar seus leitores.</p>
                    </div>
                </div>
            </Container>
        </>
    );
}