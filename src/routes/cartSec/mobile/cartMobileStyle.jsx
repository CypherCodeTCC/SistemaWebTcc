import styled from "styled-components";

export const Container = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  min-height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;

  @media (max-width: 374px) {
    padding: 0;
  }
`;

export const FinalizePurchase = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;

export const FinalizePurchaseBoxMobile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14.5px;
  font-family: "Inter", sans-serif;
`;

export const ImageMobile = styled.img`
  width: 20px;
  height: 20px;
`;

export const SubTitlePurchaseBoxMobile = styled.p`
  width: 100px;
`;

export const Button = styled.button`
  padding: 8px;
  background-color: transparent;
  font-size: 13.5px;
  font-family: "Inter", sans-serif;
  border-radius: 10px;

  &&:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.5s;
  }
`;

export const ContainerCheckoutMobile = styled.div`
  width: 100%;
`;

export const PurchaseInformationMobile = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const LineMobile = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 100px;
  background-color: #e0ecf4;
`;

export const SubTitleMobile = styled.p`
  padding: 10px 0 10px 0;
  font-family: "Inter", sans-serif;
  font-size: 12.5px;
  font-weight: bold;
  width: 50%;
`;

export const PrecosMobile = styled.p`
  padding-top: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 11.5px;
  text-align: right;
  font-weight: bold;
  width: 50%;
`;

export const PrecoTotalMobile = styled.p`
  padding-top: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  text-align: right;
  font-weight: bold;
  width: 50%;
`;

export const PaymentMobile = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ImagePaymentMobile = styled.img`
  width: 49px;
  height: 41px;
`;

export const CartItemsMobile = styled.div`
  padding: 30px;
  display: flex;
  gap: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const ImageLivroMobile = styled.img`
  width: 80px;
  height: 80px;
`;

export const DescriptionMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NomeEditoraMobile = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 11.5px;
  font-weight: 600;
`;

export const NomeLivroMobile = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14.5px;
  font-weight: 400;
`;

export const NomeAutorMobile = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
`;

export const ButtonAddMobile = styled.button`
  width: 80px;
  height: 32px;
  padding: 8px;
  letter-spacing: 1.5px;
  background-color: #0f172a;
  color: #ffffff;
  font-size: 11.5px;
  font-family: "Inter", sans-serif;
  border: 1px solid #8b8f98;
  cursor: pointer;
`;

export const PrecoItemMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
`;

export const NomePrecoMobile = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 13.5px;
  font-weight: 600;
`;

export const ButtonExcluirMobile = styled.button`
  background-color: transparent;
  font-size: 12.5px;
  font-family: "Inter", sans-serif;
  color: #8f8f90;
  cursor: pointer;
`;
