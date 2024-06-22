import { useState } from "react";
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
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const [logradouro, setLogradouro] = useState("");
  const [nomeCid, setNomeCid] = useState("");
  const [uf, setUf] = useState("");

  const [cepValue, setCepValue] = useState(""); // State for CEP value
  const [nomeValue, setNomeValue] = useState("");
  const [sobrenomeValue, setSobrenomeValue] = useState("");
  const [cpfValue, setCpfValue] = useState("");
  const [telefoneValue, setTelefoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [numeroEndValue, setNumeroEndValue] = useState("");
  const [complementoValue, setComplementoValue] = useState("");
  const [senhaValue, setSenhaValue] = useState("");
  const [confirmaSenhaValue, setConfirmaSenhaValue] = useState("");

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    setErrorMessage("");
  };

  const pesquisacep = async (valor) => {
    const cep = valor.replace(/\D/g, "");

    if (cep !== "") {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
          const data = await response.json();
          meu_callback(data);
        } catch (error) {
          limpa_formulário_cep();
          alert("Erro ao buscar CEP. Tente novamente.");
        }
      } else {
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
      }
    } else {
      limpa_formulário_cep();
    }
  };

  const meu_callback = (conteudo) => {
    if (!("erro" in conteudo)) {
      setLogradouro(conteudo.logradouro);
      setNomeCid(conteudo.localidade);
      setUf(conteudo.uf);
    } else {
      limpa_formulário_cep();
      alert("CEP não encontrado.");
    }
  };

  const limpa_formulário_cep = () => {
    setLogradouro("");
    setNomeCid("");
    setUf("");
  };

  const handleBlur = (event) => {
    const cepValue = event.target.value;
    setCepValue(cepValue);
    pesquisacep(cepValue);
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const handleSubmit = async () => {
    const senha = senhaValue;
    const confirmaSenha = confirmaSenhaValue;

    if (
      !nomeValue ||
      !sobrenomeValue ||
      !cpfValue ||
      !telefoneValue ||
      !emailValue ||
      !cepValue ||
      !numeroEndValue ||
      !logradouro ||
      !nomeCid ||
      !uf ||
      !senhaValue ||
      !confirmaSenhaValue
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
        CPF: cpfValue,
        Nome: nomeValue + " " + sobrenomeValue,
        Email: emailValue,
        Telefone: telefoneValue,
        CEP: cepValue,
        Senha: senhaValue,
        Logradouro: logradouro,
        Uf: uf,
        NomeCid: nomeCid,
        NumeroEnd: numeroEndValue,
        Complemento: complementoValue,
      };

      if(!validateEmail(data.Email)){
        setEmailErrorMessage("Formato de email inválido.");
        return;
      }

      await axios.post("https://node-routes-mysql.vercel.app/client", data);
      navigate("/login");
    } catch (err) {
      console.log(err);
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
              value={nomeValue}
              onChange={(e) => setNomeValue(e.target.value)}
            />
          </Text>
          <Text>
            <h4>Sobrenome</h4>
            <Input
              type="text"
              placeholder="Ex: Feitosa"
              name="Sobrenome"
              value={sobrenomeValue}
              onChange={(e) => setSobrenomeValue(e.target.value)}
            />
          </Text>
          <Text>
            <h4>CPF</h4>
            <Input
              mask="000.000.000-00"
              type="text"
              placeholder="Ex: 123.456.789-11"
              name="Cpf"
              value={cpfValue}
              onChange={(e) => setCpfValue(e.target.value)}
            />
          </Text>
          <Text>
            <h4>Telefone</h4>
            <Input
              mask="00000-0000"
              type="tel"
              placeholder="Ex: 99999-9999"
              name="Telefone"
              value={telefoneValue}
              onChange={(e) => setTelefoneValue(e.target.value)}
            />
          </Text>
          <Email>
            <h4>Seu E-mail</h4>
            <InputEmail
              type="email"
              placeholder="Ex: meuemail@endereco.com"
              name="Email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            {emailErrorMessage && <SubTitle isError={true}>{emailErrorMessage}</SubTitle>}
          </Email>
          <CepNumUf>
            <h4>CEP</h4>
            <Input
              mask="00000-000"
              type="text"
              placeholder="Ex: 12345-678"
              name="Cep"
              onBlur={handleBlur}
            />
          </CepNumUf>
          <Address>
            <h4>Logradouro</h4>
            <Input type="text" name="Logradouro" value={logradouro} readOnly />
          </Address>
          <CepNumUf>
            <h4>Número</h4>
            <Input
              type="text"
              name="NumeroEnd"
              value={numeroEndValue}
              onChange={(e) => setNumeroEndValue(e.target.value)}
              maxLength="5"
            />
          </CepNumUf>
          <CepNumUf>
            <h4>Complem.</h4>
            <Input
              type="text"
              name="Complemento"
              value={complementoValue}
              onChange={(e) => setComplementoValue(e.target.value)}
              maxLength="20"
            />
          </CepNumUf>
          <City>
            <h4>Cidade</h4>
            <Input type="text" name="NomeCid" value={nomeCid} readOnly />
          </City>
          <CepNumUf>
            <h4>UF</h4>
            <Input mask="aa" type="text" name="Uf" value={uf} readOnly />
          </CepNumUf>
          <Text>
            <h4>Senha</h4>
            <Input
              type="password"
              placeholder="Insira uma palavra-passe"
              name="Senha"
              value={senhaValue}
              onChange={(e) => setSenhaValue(e.target.value)}
            />
          </Text>
          <Text>
            <h4>Confirme a Senha</h4>
            <Input
              type="password"
              placeholder="Confirme a senha"
              name="ConfirmaSenha"
              value={confirmaSenhaValue}
              onChange={(e) => setConfirmaSenhaValue(e.target.value)}
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
