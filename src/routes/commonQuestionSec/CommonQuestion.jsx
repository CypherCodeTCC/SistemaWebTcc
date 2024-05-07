import BookPng from '../../../public/book.png'
import FacPng from '../../../public/fac.png'
import { Container } from './commonStyle';

export default function CommonQuestion() {
    return (
        <>
            <Container>
                <div className='container-image'>
                    <img src={BookPng} className="big-image" alt="livrao" />
                </div>
                <div className='container-text'>
                    <div className='content-title'>
                        <img src={FacPng} />
                        <p>FAC</p>
                    </div>
                    <h1>Perguntas Frequentes</h1>
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
            </Container>
        </>
    );
}