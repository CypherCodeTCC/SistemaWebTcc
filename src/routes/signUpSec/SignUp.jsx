import {  useRef } from 'react';
import PngCelular from '../../../public/celular.png'
import { Container } from './signUpStyle';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function SignUp() {
    const nomeRef = useRef(null);
    const sobrenomeRef = useRef(null);
    const cpfRef = useRef(null);
    const telefoneRef = useRef(null);
    const emailRef = useRef(null);
    const cepRef = useRef(null);
    const logradouroRef = useRef(null);
    const numeroEndRef = useRef(null);
    const complementoRef = useRef(null);
    const nomeCidRef = useRef(null);
    const ufRef = useRef(null);
    const senhaRef = useRef(null);
    const confirmaSenhaRef = useRef(null);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try{
            const data = {
                CPF: cpfRef.current.value,
                Nome: nomeRef.current.value + " " + sobrenomeRef.current.value,   
                Email: emailRef.current.value,
                Telefone: telefoneRef.current.value,         
                CEP: cepRef.current.value,             
                Senha: senhaRef.current.value,         
                Logradouro: logradouroRef.current.value,
                Uf: ufRef.current.value,  
                NomeCid: nomeCidRef.current.value,
                NumeroEnd: numeroEndRef.current.value,
                Complemento: complementoRef.current.value,      
            }

            await axios.post("https://node-routes-mysql.vercel.app/client", data)
            navigate("/login");
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <Container>
                <div className='container-image'>
                    <img src={PngCelular} alt="Imagem de Celular" />
                </div>
                <div className='container-form'>
                    <h2>Registre-se</h2>
                    <p>Crie a sua própria conta Liber e tenha acesso a inúmeros benefícios</p>
                    <div className='input-text'>
                        <h4>Primeiro Nome</h4>
                        <input type="text" placeholder='Ex: Juan' name="Nome" ref={nomeRef}/>
                    </div>
                    <div className='input-text'>
                        <h4>Sobrenome</h4>
                        <input type="text" placeholder='Ex: Feitosa' name="Nome" ref={sobrenomeRef}/>
                    </div>
                    <div className='input-text'>
                        <h4>CPF</h4>
                        <input type="text" placeholder='Ex: 12345678911' name="Cpf" ref={cpfRef}/>
                    </div>
                    <div className='input-text'>
                        <h4>Telefone</h4>
                        <input type="tel" placeholder='Ex: (11) 99999-9999' name="Telefone" ref={telefoneRef}/>
                    </div>
                    <div className='input-email'>
                        <h4>Seu E-mail</h4>
                        <input type="email" placeholder='Ex: meuemail@endereco.com' name="Email" ref={emailRef}/>
                    </div>
                    <div className='input-cep-num-uf'>
                        <h4>CEP</h4>
                        <input type="text" name='Cep' ref={cepRef}/>
                    </div>
                    <div className='input-text input-address'>
                        <h4>Logradouro</h4>
                        <input type="text" name='Logradouro' ref={logradouroRef}/>
                    </div>
                    <div className='input-cep-num-uf'>
                        <h4>Número</h4>
                        <input type="text" name='NumeroEnd' ref={numeroEndRef} />
                    </div>
                    <div className='input-cep-num-uf'>
                        <h4>Complem.</h4>
                        <input type="text" name='Complemento' ref={complementoRef} />
                    </div>
                    <div className='input-text input-city'>
                        <h4>Cidade</h4>
                        <input type="text" name='NomeCid' ref={nomeCidRef} />
                    </div>
                    <div className='input-cep-num-uf'>
                        <h4>UF</h4>
                        <input type="text" name='Uf' ref={ufRef} />
                    </div>
                    <div className='input-text'>
                        <h4>Senha</h4>
                        <input type="password" placeholder='Insira uma palavra-passe' name='Senha' ref={senhaRef} />
                    </div>
                    <div className='input-text'>
                        <h4>Confirme a Senha</h4>
                        <input type="password" placeholder='Confirme a senha' name='ConfirmaSenha' ref={confirmaSenhaRef} />
                    </div>
                    <div className='input-checkbox'>
                        <input type="checkbox" />
                        <p>Ao criar uma conta, você concorda com nossos <span>Termos & Condições</span></p>
                    </div>
                    <button onClick={handleSubmit}>Registre-se</button>
                </div>
            </Container>
        </>
    );
}