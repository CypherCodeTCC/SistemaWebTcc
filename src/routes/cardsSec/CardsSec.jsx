import { Container, Card, Title, SubTitle } from "./cardsStyle";

function Icons({ type }) {
  if (type === 1) {
    return (
      <svg
        width="88"
        height="88"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42 38V34.7081C42 33.0725 41.0042 31.6017 39.4856 30.9942L35.4173 29.3669C33.4857 28.5943 31.2844 29.4312 30.354 31.292L30 32C30 32 25 31 21 27C17 23 16 18 16 18L16.708 17.646C18.5688 16.7156 19.4057 14.5143 18.6331 12.5827L17.0058 8.51444C16.3983 6.99581 14.9275 6 13.2919 6H10C7.79086 6 6 7.79086 6 10C6 27.6731 20.3269 42 38 42C40.2091 42 42 40.2091 42 38Z"
          stroke="#141718"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (type === 2) {
    return (
      <svg
        width="88"
        height="88"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 18C6 17.0572 6 16.5858 6.29289 16.2929C6.58579 16 7.05719 16 8 16H40C40.9428 16 41.4142 16 41.7071 16.2929C42 16.5858 42 17.0572 42 18V24C42 24.9428 42 25.4142 41.7071 25.7071C41.4142 26 40.9428 26 40 26H38C37.0572 26 36.5858 26 36.2929 26.2929C36 26.5858 36 27.0572 36 28V38C36 38.9428 36 39.4142 35.7071 39.7071C35.4142 40 34.9428 40 34 40H14C13.0572 40 12.5858 40 12.2929 39.7071C12 39.4142 12 38.9428 12 38V28C12 27.0572 12 26.5858 11.7071 26.2929C11.4142 26 10.9428 26 10 26H8C7.05719 26 6.58579 26 6.29289 25.7071C6 25.4142 6 24.9428 6 24V18Z"
          stroke="black"
          strokeWidth="2"
        />
        <path
          d="M10 26H38"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 14L24 40"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 14L20.8362 10.8362C19.6287 9.62865 18.1566 8.71886 16.5365 8.17884L12.6325 6.87748C11.3374 6.4458 10 7.40974 10 8.77485V12.5585C10 13.4193 10.5509 14.1836 11.3675 14.4558L16 16"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 14L27.1638 10.8362C28.3713 9.62865 29.8434 8.71886 31.4635 8.17884L35.3675 6.87748C36.6626 6.4458 38 7.40974 38 8.77485V12.5585C38 13.4193 37.4491 14.1836 36.6325 14.4558L32 16"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  } else if (type === 3) {
    return (
      <svg
        width="88"
        height="88"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.773 7.20613L38.2577 10.802C38.6954 10.9188 39 11.3152 39 11.7683V27.7889C39 29.795 37.9974 31.6684 36.3282 32.7812L24.5547 40.6302C24.2188 40.8541 23.7812 40.8541 23.4453 40.6302L11.6718 32.7812C10.0026 31.6684 9 29.795 9 27.7889V11.7683C9 11.3152 9.30458 10.9188 9.74234 10.802L23.227 7.20613C23.7335 7.07107 24.2665 7.07107 24.773 7.20613Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19 23L22.8232 26.8232C22.9209 26.9209 23.0791 26.9209 23.1768 26.8232L30 20"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  } else if (type === 4) {
    return (
      <svg
        width="88"
        height="88"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 13V13C9 12.07 9 11.605 9.10222 11.2235C9.37962 10.1883 10.1883 9.37962 11.2235 9.10222C11.605 9 12.07 9 13 9L36 9C36.4714 9 36.7071 9 36.8536 9.14645C37 9.29289 37 9.5286 37 10V11C37 13.8284 37 15.2426 36.1213 16.1213C35.2426 17 33.8284 17 31 17H30M9 13V13C9 13.93 9 14.395 9.10222 14.7765C9.37962 15.8117 10.1883 16.6204 11.2235 16.8978C11.605 17 12.07 17 13 17L37 17C37.9428 17 38.4142 17 38.7071 17.2929C39 17.5858 39 18.0572 39 19V25M9 13L9 35C9 36.8856 9 37.8284 9.58579 38.4142C10.1716 39 11.1144 39 13 39L37 39C37.9428 39 38.4142 39 38.7071 38.7071C39 38.4142 39 37.9428 39 37V33M39 33H33C32.0572 33 31.5858 33 31.2929 32.7071C31 32.4142 31 31.9428 31 31V27C31 26.0572 31 25.5858 31.2929 25.2929C31.5858 25 32.0572 25 33 25H39M39 33V25"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    );
  }
}

export default function Cards() {
  return (
    <>
      <Container>
        <Card>
          <Icons type={4} />
          <Title>Entrega Grátis</Title>
          <SubTitle>Pedidos acima de R$ 200,00</SubTitle>
        </Card>
        <Card>
          <Icons type={1} />
          <Title>Dinheiro de Volta</Title>
          <SubTitle>Garantia de 30 dias</SubTitle>
        </Card>
        <Card>
          <Icons type={2} />
          <Title>Pagamento Seguro</Title>
          <SubTitle>Certificado pela Visa</SubTitle>
        </Card>
        <Card>
          <Icons type={3} />
          <Title>Atendimento 24/7</Title>
          <SubTitle>Suporte por telefone</SubTitle>
        </Card>
      </Container>
    </>
  );
}
