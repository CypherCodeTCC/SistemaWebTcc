import React from "react";

/* IMPORTANDO AS IMAGENS */ 
import imageDev from '../../../public/roxoapontandodireita.png';

/* IMPORTANTO OS COMPONENTES ESTILIZADOS */
import { Container, Div, Figure, H1, H5 } from "./categories";



export default function Categories() {
    return (
        <>
            <Container className="container">
                <Div className="cards-devpessoal">
                    <Div className="card-devpessoal">
                        <H1>Desenvolvimento Pessoal</H1>
                        <H5>Comprar agora</H5>
                        <Figure>
                            <img className="imageDev"
                                src={imageDev} 
                                alt="Livro roxo flutuando"
                            />
                        </Figure>
                    </Div>
                </Div>
                <Div className="cards-classicgeek">
                    <Div className="card-classic">
                        <Figure>
                            <img className="imageClassic"
                                src={imageDev} 
                                alt="Livro roxo flutuando"
                            />
                        </Figure>
                        <H1>Clássicos</H1>
                        <H5>Comprar agora</H5>
                    </Div>
                    <Div className="card-geek">
                        <Figure>
                            <img className="imageGeek"
                                src={imageDev} 
                                alt="Livro roxo flutuando"
                            />
                        </Figure>
                        <H1>Geek</H1>
                        <H5>Comprar agora</H5>
                    </Div>
                </Div>
            </Container>
        </>
    );
}