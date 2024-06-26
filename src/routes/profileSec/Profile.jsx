import { useEffect, useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import ProfileMobile from "./mobile/ProfileMobile";
import {
  Button,
  Cancelar,
  Container,
  ContainerButtons,
  ContainerSubTitle,
  ContainerSubTitleBlue,
  ContainerTitle,
  FormUser,
  Input,
  InputText,
  Password,
  SubTitle,
  TitleForm,
} from "./profileStyle";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const uId = localStorage.getItem("uId");
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Nome: "",
    Email: "",
    Telefone: "",
  });

  const [address, setAddress] = useState({
    CEP: "",
    Logradouro: "",
    Numero: "",
    Complemento: "",
    Cidade: "",
    Estado: "",
  });

  const [currentPassword, setCurrentPassword] = useState(""); //SENHA ATUAL
  const [newPassword, setNewPassword] = useState(""); //NOVA SENHA
  const [confirmNewPassword, setConfirmNewPassword] = useState(""); //CONFIRMAÇÃO DA NOVA SENHA
  const [optionColor, setOptionColor] = useState(1);

  const width = useWindowWidth();

  //PEGAR OS DADOS DO USUARIO LOGADO
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `https://node-routes-mysql.vercel.app/client/${localStorage.getItem(
            "userId"
          )}`
        );
        setUser(res.data);
      } catch (err) {
        console.log("Erro ao encontrar os dados do usuário.", err);
      }
    };
    fetchUser();
  }, []);

  //PEGAR O ENDEREÇO DO USUARIO LOGADO
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const res = await axios.get(
          `https://node-routes-mysql.vercel.app/client/address/${localStorage.getItem(
            "userId"
          )}`
        );
        setAddress(res.data);
      } catch (err) {
        console.log("Erro ao encontrar o endereço do usuário.", err);
      }
    };
    fetchAddress();
  }, []);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleChangedAddress = (e) => {
    setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async () => {
    const updatedData = { ...user };

    const isAnyPasswordFilled =
      currentPassword || newPassword || confirmNewPassword;

    //SE ALGUM CAMPO DE SENHA ESTIVER PREENCHIDO
    if (isAnyPasswordFilled) {
      //SE OS CAMPOS DE SENHAS NAO ESTIVEREM PREENCHIDOS, NAO ATUALIZE
      if (!currentPassword || !newPassword || !confirmNewPassword) {
        toast.error("Preencha todos os campos de senha.", {
          closeOnClick: true,
        });
        return;
      }

      //SE A CONFIRMAÇAO DE SENHA NAO BATER, NAO
      if (newPassword !== confirmNewPassword) {
        toast.error("A nova senha e a confirmação não coincidem.", {
          closeOnClick: true,
        });
        return;
      }

      updatedData.currentPassword = currentPassword;
      updatedData.newPassword = newPassword;
    }

    try {
      await axios.put(
        `https://node-routes-mysql.vercel.app/client/${localStorage.getItem(
          "userId"
        )}`,
        updatedData
      );
      toast.success("Dados atualizados com sucesso!", {
        closeOnClick: true,
      });
    } catch (err) {
      toast.error("Senha Incorreta.", {
        closeOnClick: true,
      });
      console.log("Erro ao atualizar os dados do perfil.", err);
    }
  };

  const handleUpdateAddress = async () => {
    try {
      await axios.put(
        `https://node-routes-mysql.vercel.app/client/address/${localStorage.getItem(
          "userId"
        )}`,
        address
      );
      toast.success("Endereço atualizado com sucesso!", {
        closeOnClick: true,
      });
    } catch (err) {
      toast.error("Erro ao atualizar o endereço. Tente novamente mais tarde.", {
        closeOnClick: true,
      });
      console.log("Erro ao atualizar o endereço do usuário");
    }
  };

  const handleUpdateGoogleOrFacebook = async () => {
    console.log(user);
    try {
      await axios.put(
        `https://node-routes-mysql.vercel.app/client/${localStorage.getItem(
          "userId"
        )}`,
        user
      );

      await axios.put(
        `https://node-routes-mysql.vercel.app/client/address/${localStorage.getItem(
          "userId"
        )}`,
        address
      );
      toast.success("Dados atualizados com sucesso!", {
        closeOnClick: true,
      });
    } catch (err) {
      toast.error("Erro ao atualizar os dados. Tente novamente mais tarde.", {
        closeOnClick: true,
      });
      console.log("Erro ao atualizar os dados", err);
    }
  };

  if (width < 1024) return <ProfileMobile />;

  const changeOptionColor = (id) => {
    setOptionColor(id);
  };

  const clearCep = () => {
    setAddress((prev) => ({
      ...prev,
      Logradouro: "",
      NomeCid: "",
      Uf: ""
    }));
  };

  const myCallback = (content) => {
    if(!("erro" in content)) {
      setAddress((prev) => ({
        ...prev,
        Logradouro: content.logradouro,
        Cidade: content.localidade,
        Estado: content.uf,
      }));
    }
    else{
      clearCep();
      alert("CEP não encontrado.");
    }
  };

  const searchCep = async (value) => {
    const cep = value.replace(/\D/g, "");

    if(cep !== ""){
      const confirmCep = /^[0-9]{8}$/; 

      if(confirmCep.test(cep)){
        try{
          const res = await fetch(`https://viacep.com.br/ws/${cep}/json`);
          const data = await res.json();
          myCallback(data);
        }
        catch(err){
          clearCep();
          console.log("Erro ao buscar CEP.", err);
          alert("Erro ao buscar CEP. Tente novamente.");
        }
      }
      else{
        clearCep();
        alert("Formato do CEP inválido.")
      }
    }
    else clearCep()
  }

  const handleBlur = (e) => {
    const cepValue = e.target.value;
    setAddress((prev) => ({...prev, CEP: cepValue}));
    searchCep(cepValue);
  }


  const renderForm = () => {
    switch (optionColor) {
      case 1:
        return (
          <>
            {!uId ? (
              <FormUser>
                <TitleForm>Alterar seu perfil</TitleForm>
                <InputText>
                  <SubTitle>Nome</SubTitle>
                  <Input
                    type="text"
                    value={user.Nome}
                    name="Nome"
                    onChange={handleChanged}
                  />
                </InputText>

                <InputText>
                  <SubTitle>E-mail</SubTitle>
                  <Input
                    type="text"
                    value={user.Email}
                    name="Email"
                    onChange={handleChanged}
                  />
                </InputText>
                <InputText>
                  <SubTitle>Telefone</SubTitle>
                  <Input
                    mask="(00) 90000-0000"
                    type="text"
                    value={user.Telefone}
                    name="Telefone"
                    onChange={handleChanged}
                  />
                </InputText>
                <Password>
                  <SubTitle>Alteração de senha</SubTitle>
                  <Input
                    type="password"
                    placeholder="Senha atual"
                    required
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Nova senha"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Confirme a nova senha"
                    required
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                  />
                </Password>
                <ContainerButtons>
                  <Cancelar onClick={() => navigate("/")}>Cancelar</Cancelar>
                  <Button onClick={handleUpdate}>Salvar Alterações</Button>
                </ContainerButtons>
              </FormUser>
            ) : (
              <FormUser>
                <TitleForm>Alterar seu perfil</TitleForm>
                <InputText>
                  <SubTitle>Nome</SubTitle>
                  <Input
                    type="text"
                    value={user.Nome}
                    name="Nome"
                    onChange={handleChanged}
                  />
                </InputText>
                <InputText>
                  <SubTitle>Telefone</SubTitle>
                  <Input
                    mask="(00) 90000-0000"
                    type="text"
                    value={user.Telefone}
                    name="Telefone"
                    onChange={handleChanged}
                  />
                </InputText>
                <InputText>
                  <SubTitle>Cep</SubTitle>
                  <Input
                    mask="00000-000"
                    type="text"
                    value={address.CEP}
                    name="CEP"
                    onBlur={handleBlur}
                    onChange={handleChangedAddress}
                  />
                </InputText>
                <InputText>
                  <SubTitle>Logradouro</SubTitle>
                  <Input
                    type="text"
                    value={address.Logradouro}
                    name="Logradouro"
                    readOnly
                  />
                </InputText>
                <InputText>
                  <SubTitle>Numero</SubTitle>
                  <Input
                    type="text"
                    value={address.Numero}
                    name="Numero"
                    onChange={handleChangedAddress}
                    maxLenght="5"
                  />
                </InputText>
                <InputText>
                  <SubTitle>Complemento</SubTitle>
                  <Input
                    type="text"
                    value={address.Complemento}
                    name="Complemento"
                    onChange={handleChangedAddress}
                    maxLenght="10"
                  />
                </InputText>
                <InputText>
                  <SubTitle>Cidade</SubTitle>
                  <Input
                    type="text"
                    value={address.Cidade}
                    name="Cidade"
                    readOnly
                  />
                </InputText>
                <InputText>
                  <SubTitle>Estado</SubTitle>
                  <Input
                    type="text"
                    value={address.Estado}
                    name="Estado"
                    readOnly
                  />
                </InputText>
                <ContainerButtons>
                  <Cancelar onClick={() => navigate("/")}>Cancelar</Cancelar>
                  <Button onClick={handleUpdateGoogleOrFacebook}>
                    Salvar Alterações
                  </Button>
                </ContainerButtons>
              </FormUser>
            )}
          </>
        );
      case 2:
        return (
          <FormUser>
            <TitleForm>Alterar seu endereço</TitleForm>
            <InputText>
              <SubTitle>Cep</SubTitle>
              <Input
                mask="00000-000"
                type="text"
                value={address.CEP}
                name="CEP"
                onBlur={handleBlur}
                onChange={handleChangedAddress}
              />
            </InputText>
            <InputText>
              <SubTitle>Logradouro</SubTitle>
              <Input
                type="text"
                value={address.Logradouro}
                name="Logradouro"
                readOnly
              />
            </InputText>
            <InputText>
              <SubTitle>Numero</SubTitle>
              <Input
                type="text"
                value={address.Numero}
                name="Numero"
                onChange={handleChangedAddress}
                maxLength="5"
              />
            </InputText>
            <InputText>
              <SubTitle>Complemento</SubTitle>
              <Input
                type="text"
                value={address.Complemento}
                name="Complemento"
                onChange={handleChangedAddress}
                maxLength="20"
              />
            </InputText>
            <InputText>
              <SubTitle>Cidade</SubTitle>
              <Input
                type="text"
                value={address.Cidade}
                name="Cidade"
                readOnly
              />
            </InputText>
            <InputText>
              <SubTitle>Estado</SubTitle>
              <Input
                type="text"
                value={address.Estado}
                name="Estado"
                readOnly
              />
            </InputText>
            <ContainerButtons>
              <Cancelar onClick={() => navigate("/")}>Cancelar</Cancelar>
              <Button onClick={handleUpdateAddress}>Salvar Alterações</Button>
            </ContainerButtons>
          </FormUser>
        );
    }
  };

  return (
    <>
      <Container>
        <ContainerTitle>
          <ContainerSubTitle>Gerenciar conta</ContainerSubTitle>
          <ContainerSubTitleBlue
            isActive={optionColor === 1}
            onClick={() => changeOptionColor(1)}
          >
            Meu Perfil
          </ContainerSubTitleBlue>
          {!uId && (
            <ContainerSubTitleBlue
              isActive={optionColor === 2}
              onClick={() => changeOptionColor(2)}
            >
              Meu Endereço
            </ContainerSubTitleBlue>
          )}
        </ContainerTitle>
        {renderForm()}
      </Container>
    </>
  );
}
