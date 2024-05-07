import BookPng from '../../../public/book.png'
import FacPng from '../../../public/fac.png'

export default function CommonQuestion() {
    return (
        <>
            <section>
                <div className='container-image'>
                    <img src={BookPng} alt="livrao" />
                </div>
                <div className='container-text'>
                    <img src={FacPng} />
                    <h1>Perguntas Frquentes</h1>
                    <details>
                        <summary>Smod tempor incididunt ut labore et dolore</summary>
                        <ul>
                            <li>Hello</li>
                            <li>World</li>
                        </ul>
                    </details>
                    <details>
                        <summary>Smod tempor incididunt ut labore et dolore</summary>
                        <ul>
                            <li>Hello</li>
                            <li>World</li>
                        </ul>
                    </details>
                    <details>
                        <summary>Smod tempor incididunt ut labore et dolore</summary>
                        <ul>
                            <li>Hello</li>
                            <li>World</li>
                        </ul>
                    </details>
                </div>
            </section>
        </>
    );
}