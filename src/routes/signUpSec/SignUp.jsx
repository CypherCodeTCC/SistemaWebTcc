import { useRef, useState, useEffect } from "react";
import PngCelular from "../../../public/celular.png";
import {
  Address,
  Button,
  CepNumUf,
  City,
  Container,
  ContainerCheckbox,
  ContainerForm,
  ContainerImage,
  Email,
  Image,
  Input,
  InputEmail,
  Span,
  SubTitle,
  Text,
  Title,
} from "./signUpStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

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

  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    setErrorMessage("");
  };

  const handleSubmit = async () => {
    const senha = senhaRef.current.value;
    const confirmaSenha = confirmaSenhaRef.current.value;

    if (
      !nomeRef.current.value ||
      !sobrenomeRef.current.value ||
      !cpfRef.current.value ||
      !telefoneRef.current.value ||
      !emailRef.current.value ||
      !cepRef.current.value ||
      !logradouroRef.current.value ||
      !numeroEndRef.current.value ||
      !nomeCidRef.current.value ||
      !ufRef.current.value ||
      !senhaRef.current.value ||
      !confirmaSenhaRef.current.value
    ) {
      toast.error("Por favor, preencha todos os campos obrigatórios.", {
        closeOnClick: true,
      });
      return;
    }

    if (senha !== confirmaSenha) {
      toast.error("A senha e a confirmação não coincidem.", {
        closeOnClick: true,
      });
      return;
    }

    if (!isChecked) {
      setErrorMessage(
        "Você deve aceitar os termos e condições antes de cadastrar."
      );
      return;
    }

    try {
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
      };

      await axios.post("https://node-routes-mysql.vercel.app/client", data);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const [dadosJson, setDadosJson] = useState([]);

  useEffect(() => {
    // Carregar os dados JSON quando o componente é montado
    const carregarDados = async () => {
      try {
        const resposta = await fetch("/public/dados.json");
        const dados = await resposta.json();
        setDadosJson(dados);
      } catch (erro) {
        console.error("Erro ao carregar dados JSON:", erro);
      }
    };

    carregarDados();
  }, []);

  const gerarCPF = () => {
    const multiplicador = 9;
    let cpf = Array.from({ length: 11 }, () =>
      Math.floor(Math.random() * multiplicador)
    ).join("");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  const gerarCEP = () => {
    const multiplicador = 9;
    return `${Math.floor(Math.random() * multiplicador)}${Math.floor(
      Math.random() * multiplicador
    )}${Math.floor(Math.random() * multiplicador)}${Math.floor(
      Math.random() * multiplicador
    )}${Math.floor(Math.random() * multiplicador)}-${Math.floor(
      Math.random() * multiplicador
    )}${Math.floor(Math.random() * multiplicador)}${Math.floor(
      Math.random() * multiplicador
    )}`;
  };

  const gerarNumero = () => {
    return Math.floor(Math.random() * 1000).toString();
  };

  const preencherComDadosAleatorios = () => {
    if (dadosJson.length > 0) {
      // Gerar dados aleatórios para cada campo
      nomeRef.current.value =
        dadosJson[Math.floor(Math.random() * dadosJson.length)].Nome.split(
          " "
        )[0];
      sobrenomeRef.current.value =
        dadosJson[Math.floor(Math.random() * dadosJson.length)].Nome.split(
          " "
        )[1];
      cpfRef.current.value = gerarCPF();
      telefoneRef.current.value =
        dadosJson[Math.floor(Math.random() * dadosJson.length)].Telefone;
      emailRef.current.value =
        dadosJson[Math.floor(Math.random() * dadosJson.length)].Email;
      cepRef.current.value = gerarCEP();
      logradouroRef.current.value =
        dadosJson[Math.floor(Math.random() * dadosJson.length)].Logradouro;
      numeroEndRef.current.value = gerarNumero();
      complementoRef.current.value =
        dadosJson[Math.floor(Math.random() * dadosJson.length)].Complemento;
      nomeCidRef.current.value =
        dadosJson[Math.floor(Math.random() * dadosJson.length)].NomeCid;
      ufRef.current.value =
        dadosJson[Math.floor(Math.random() * dadosJson.length)].Uf;
      senhaRef.current.value =
        dadosJson[Math.floor(Math.random() * dadosJson.length)].Senha;
      confirmaSenhaRef.current.value = senhaRef.current.value;

      console.log(
        `Email: ${emailRef.current.value}, Senha: ${senhaRef.current.value}`
      );
    }
  };

  return (
    <>
      <Container>
        <ContainerImage>
          <Image src={PngCelular} alt="Imagem de Celular" />
        </ContainerImage>
        <ContainerForm>
          <Title>Registre-se</Title>
          <SubTitle isError={false}>
            Crie a sua própria conta Liber e tenha acesso a inúmeros benefícios
          </SubTitle>
          <Text>
            <h4>Primeiro Nome</h4>
            <Input
              type="text"
              placeholder="Ex: Juan"
              name="Nome"
              ref={nomeRef}
              onChange={(e) => {
                if (e.target.value === "DadosJson") {
                  preencherComDadosAleatorios();
                }
              }}
            />
          </Text>
          <Text>
            <h4>Sobrenome</h4>
            <Input
              type="text"
              placeholder="Ex: Feitosa"
              name="Nome"
              ref={sobrenomeRef}
            />
          </Text>
          <Text>
            <h4>CPF</h4>
            <Input
              mask="000.000.000-00"
              type="text"
              placeholder="Ex: 123.456.789-11"
              name="Cpf"
              ref={cpfRef}
            />
          </Text>
          <Text>
            <h4>Telefone</h4>
            <Input
              mask="00000-0000"
              type="tel"
              placeholder="Ex: 99999-9999"
              name="Telefone"
              ref={telefoneRef}
            />
          </Text>
          <Email>
            <h4>Seu E-mail</h4>
            <InputEmail
              type="email"
              placeholder="Ex: meuemail@endereco.com"
              name="Email"
              ref={emailRef}
            />
          </Email>
          <CepNumUf>
            <h4>CEP</h4>
            <Input
              mask="00000-000"
              type="text"
              placeholder="Ex: 12345-678"
              name="Cep"
              ref={cepRef}
            />
          </CepNumUf>
          <Address>
            <h4>Logradouro</h4>
            <Input type="text" name="Logradouro" ref={logradouroRef} />
          </Address>
          <CepNumUf>
            <h4>Número</h4>
            <Input type="text" name="NumeroEnd" ref={numeroEndRef} />
          </CepNumUf>
          <CepNumUf>
            <h4>Complem.</h4>
            <Input type="text" name="Complemento" ref={complementoRef} />
          </CepNumUf>
          <City>
            <h4>Cidade</h4>
            <Input type="text" name="NomeCid" ref={nomeCidRef} />
          </City>
          <CepNumUf>
            <h4>UF</h4>
            <Input mask="aa" type="text" name="Uf" ref={ufRef} />
          </CepNumUf>
          <Text>
            <h4>Senha</h4>
            <Input
              type="password"
              placeholder="Insira uma palavra-passe"
              name="Senha"
              ref={senhaRef}
            />
          </Text>
          <Text>
            <h4>Confirme a Senha</h4>
            <Input
              type="password"
              placeholder="Confirme a senha"
              name="ConfirmaSenha"
              ref={confirmaSenhaRef}
            />
          </Text>
          <ContainerCheckbox>
            <Input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <SubTitle>
              Ao criar uma conta, você concorda com nossos{" "}
              <Span>Termos & Condições</Span>
            </SubTitle>
          </ContainerCheckbox>
          {errorMessage && <SubTitle isError={true}>{errorMessage}</SubTitle>}
          <Button onClick={handleSubmit}>Registre-se</Button>
        </ContainerForm>
      </Container>
    </>
  );
}
