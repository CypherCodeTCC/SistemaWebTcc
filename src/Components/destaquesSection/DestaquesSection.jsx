import './destaquesSection.css';

function DestaquesSection() {
    return (
        <section className='destaques-container'>
            <div className='titulo-links-destaques'>
                <div className='titulo-container-destaques'>
                    <h2 className='titulo-destaques'>Destaques</h2>
                </div>
                <div className="abas">
                    <button className="aba-titulo">Livros</button>
                    <button className="aba-titulo">Livros</button>
                    <button className="aba-titulo">Livros</button>
                    <button className="aba-titulo">Livros</button>
                    <button className="aba-titulo">Livros</button>        
                </div>
            </div>

            <div className='produtos-destaques'>
                
            </div>
        </section>
    )
}
export default DestaquesSection;

/* imagem central a esquerda = 638px de width e height, as outras 4 a direita tem 293 de height e width, padding: 0vw 1.66666667vw 1.66666667vw 0vw;*/