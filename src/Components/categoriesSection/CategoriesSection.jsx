import React from "react";

import {Container, Div} from "./categories";

export default function Categories(){
    return(
        <>
           <Container className="container">
                <Div className="content">
                    <Div className="cards">
                        <Div className="card-devpessoal">
                            <h1>Desenvolvimento Pessoal</h1>
                            <h5>Comprar agora</h5>
                        </Div>
                    </Div>
                    <Div className="cards">
                        <Div className="card-classic">
                            <h1>Clássicos</h1>
                            <h5>Comprar agora</h5>
                        </Div>
                    </Div>
                    <Div className="cards">
                        <Div className="card-geek">
                            <h1>Geek</h1>
                            <h5>Comprar agora</h5>
                        </Div>
                    </Div>
                </Div>
            </Container> 
        </>
    );
}