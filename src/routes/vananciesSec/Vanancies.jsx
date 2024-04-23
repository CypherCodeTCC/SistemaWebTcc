import { Container } from './vananciesStyle';

import pngContratando from '../../../public/contratando.png'

export default function Vanancies() {
    return (
        <>
            <Container>
                <div className="content-text">
                    <p>Home &gt; <span>Quem Somos</span></p>
                    <h1>Estamos contratando.</h1>
                    <h1>Veja se você se adequa aos cargos</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <button>Veja as Vagas -&gt;</button>
                </div>
                <div className="content-image">
                    <img src={pngContratando} alt="Homem com gravata"/>
                </div>
            </Container>
        </>
    );
}