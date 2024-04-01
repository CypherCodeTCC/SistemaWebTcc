import './destaquesSection.css';

function DestaquesSection() {
    return (
        <section className='destaques-container'>
            {/* Seção de Destaques */}
            <div className='titulo-links-destaques'>
                {/* Título da Seção de Destaques */}
                <div className='titulo-container-destaques'>
                    <h2 className='titulo-destaques'>Destaques</h2>
                </div>
                {/* Abas de Navegação */}
                <div className="abas">
                    <ul className="abas-lista" role="tablist">
                        {/* Aba: Novidades */}
                        <li className="aba-item aba-item-ativa">
                            <button className="aba-titulo">
                                Novidades
                            </button>
                        </li>
                        {/* Aba: Livros */}
                        <li className="aba-item">
                            <button className="aba-titulo">
                                Livros
                            </button>
                        </li>
                        {/* Aba: Livros */}
                        <li className="aba-item">
                            <button className="aba-titulo">
                                Livros
                            </button>
                        </li>
                        {/* Aba: Livros */}
                        <li className="aba-item">
                            <button className="aba-titulo">
                                Livros
                            </button>
                        </li>
                        {/* Aba: Livros */}
                        <li className="aba-item">
                            <button className="aba-titulo">
                                Livros
                            </button>
                        </li>
                        {/* Aba: Livros */}
                        <li className="aba-item">
                            <button className="aba-titulo">
                                Livros
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='produtos-destaques'>
                
            </div>
        </section>
    )
}
export default DestaquesSection;

/* imagem central a esquerda = 638px de width e height, as outras 4 a direita tem 293 de height e width, padding: 0vw 1.66666667vw 1.66666667vw 0vw;*/