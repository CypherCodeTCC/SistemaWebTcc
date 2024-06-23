import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ButtonMobile,
  ContainerButtonMobile,
  ContainerMobile,
  ContainerTextMobile,
  InputMobile,
  SubTitleMobile,
  TitleMobile,
} from "../profileSec/mobile/profileMobileStyle";
import { Cancelar } from "../profileSec/profileStyle";
import { ContainerInputs, FormData } from "./finalizeRegisterStyle";

export default function FinalizeRegister() {
  const navigate = useNavigate();
  const dadosUsuario = JSON.parse(localStorage.getItem("user")) || {}; // Recupera os dados do usuário

  const [cepValue, setCepValue] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [nomeCid, setNomeCid] = useState("");
  const [uf, setUf] = useState("");
  const [complementoValue, setComplementoValue] = useState("");
  const [user, setUser] = useState({
    Nome: dadosUsuario.nome || "", // Recupera o nome do usuário
    CPF: "",
    Telefone: "",
    Email: dadosUsuario.email || "", // Recupera o e-mail do usuário
    CEP: "",
    Logradouro: "",
    NumeroEnd: "",
    Complemento: "",
    NomeCid: "",
    Uf: ""
  });

  useEffect(() => {
    console.log("User state updated:", user);
  }, [user]);

  const pesquisacep = async (valor) => {
    const cep = valor.replace(/\D/g, "");

    if (cep !== "") {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
          meu_callback(response.data);
        } catch (error) {
          limpa_formulario_cep();
          alert("Erro ao buscar CEP. Tente novamente.");
        }
      } else {
        limpa_formulario_cep();
        alert("Formato de CEP inválido.");
      }
    } else {
      limpa_formulario_cep();
    }
  };

  const meu_callback = (conteudo) => {
    if (!("erro" in conteudo)) {
      setLogradouro(conteudo.logradouro);
      setNomeCid(conteudo.localidade);
      setUf(conteudo.uf);
      setUser((prev) => ({
        ...prev,
        Logradouro: conteudo.logradouro,
        NomeCid: conteudo.localidade,
        Uf: conteudo.uf,
        CEP: conteudo.cep
      }));
    } else {
      limpa_formulario_cep();
      alert("CEP não encontrado.");
    }
  };

  const limpa_formulario_cep = () => {
    setLogradouro("");
    setNomeCid("");
    setUf("");
  };

  const handleBlur = (event) => {
    const cepValue = event.target.value;
    setCepValue(cepValue);
    pesquisacep(cepValue);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    // Verificação de campos obrigatórios
    if (!user.Nome || !user.CPF || !user.Telefone || !user.Email || !user.CEP || !user.Logradouro || !user.NumeroEnd || !user.NomeCid || !user.Uf) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    console.log("Dados a serem enviados:", user);
    try {
      const res = await axios.post("https://node-routes-mysql.vercel.app/client", user);
      console.log("Resposta do servidor:", res.data);
      if (res.data.user) {
        localStorage.setItem("userId", res.data.user.Id);
        toast.success("Cadastro realizado com sucesso!", {
          closeOnClick: true,
        });
        navigate('/');
        console.log("Cadastro realizado com sucesso!");
      } else {
        toast.error("Ocorreu um erro. Contate o administrador.");
      }
    } catch (err) {
      toast.error("Erro ao cadastrar os dados. Tente novamente mais tarde.");
      console.log("Erro ao cadastrar os dados.", err.response ? err.response.data : err);
    }
  };

  return (
    <>
      <ContainerMobile>
        <ContainerTextMobile>
          <TitleMobile>Registre suas Informações</TitleMobile>
        </ContainerTextMobile>
        <FormData>
          <ContainerInputs>
            <SubTitleMobile>Nome</SubTitleMobile>
            <InputMobile 
              type="text" 
              placeholder="Digite seu nome"
              name="Nome" 
              value={user.Nome}
              onChange={handleChange} 
            />
          </ContainerInputs>
          <ContainerInputs>
            <SubTitleMobile>CPF</SubTitleMobile>
            <InputMobile 
              mask="000.000.000-00"
              type="text" 
              placeholder="Ex: 123.456.789-11"
              name="CPF" 
              onChange={handleChange} 
            />
          </ContainerInputs>
          <ContainerInputs>
            <SubTitleMobile>Telefone</SubTitleMobile>
            <InputMobile
              mask="00000-0000" 
              type="text"
              placeholder="Ex: 99999-9999" 
              name="Telefone" 
              onChange={handleChange} 
            />
          </ContainerInputs>
          <ContainerInputs>
            <SubTitleMobile>Email</SubTitleMobile>
            <InputMobile
              type="email"
              placeholder="Ex: exemplo@dominio.com"
              name="Email"
              value={user.Email}
              readOnly // Para garantir que o campo seja apenas de leitura
            />
          </ContainerInputs>
          <ContainerInputs>
            <SubTitleMobile>Cep</SubTitleMobile>
            <InputMobile
              mask="00000-000" 
              type="text"
              placeholder="Ex: 12345-678" 
              name="CEP" 
              onBlur={handleBlur} 
              onChange={handleChange}
            />
          </ContainerInputs>
          <ContainerInputs>
            <SubTitleMobile>Logradouro</SubTitleMobile>
            <InputMobile
              type="text"
              name="Logradouro"
              value={logradouro}
              readOnly
            />
          </ContainerInputs>
          <ContainerInputs>
            <SubTitleMobile>Número</SubTitleMobile>
            <InputMobile 
              type="text" 
              name="NumeroEnd"
              maxLength="5" 
              onChange={handleChange} 
            />
          </ContainerInputs>
          <ContainerInputs>
            <SubTitleMobile>Complemento</SubTitleMobile>
            <InputMobile
              type="text"
              name="Complemento"
              value={complementoValue}
              onChange={(e) => {
                setComplementoValue(e.target.value);
                setUser((prev) => ({ ...prev, Complemento: e.target.value }));
              }}
            />
          </ContainerInputs>
          <ContainerInputs>
            <SubTitleMobile>Cidade</SubTitleMobile>
            <InputMobile 
              type="text" 
              name="NomeCid" 
              value={nomeCid} 
              readOnly 
            />
          </ContainerInputs>
          <ContainerInputs>
            <SubTitleMobile>Estado</SubTitleMobile>
            <InputMobile 
              type="text"
              mask="aa" 
              name="Uf" 
              value={uf} 
              readOnly 
            />
          </ContainerInputs>
          <ContainerButtonMobile>
            <ButtonMobile onClick={handleSubmit}>Cadastrar</ButtonMobile>
            <Cancelar>Cancelar</Cancelar>
          </ContainerButtonMobile>
        </FormData>
      </ContainerMobile>
    </>
  );
}
