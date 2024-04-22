import pngContratando from '../../../public/contratando.png'

export default function Vanancies() {
    return (
        <>
            <section>
                <div className="content-text">
                    <p>Home &gt; <span>Quem Somos</span></p>
                    <h1>Estamos contratando.</h1>
                    <h1>Veja se você se adequa aos cargos</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cumque aliquam a consectetur libero recusandae corrupti sequi esse dolore atque in tempora ipsa fuga, laborum quia. Exercitationem laborum in provident!</p>
                    <button>Veja as Vagas -&gt;</button>
                </div>
                <div className="content-image">
                    <img src={pngContratando} alt="Homem com gravata"/>
                </div>
            </section>
        </>
    );
}