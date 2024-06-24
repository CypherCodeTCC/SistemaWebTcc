import { useEffect, useState } from "react";
import {
  Ahref,
  Container,
  ContainerPayments,
  Gap,
  PayNow,
  ReactIcon,
  SubTitle,
} from "./myPaymentsStyle";
import { toast } from "react-toastify";
import axios from "axios";
import useWebSocket from "react-use-websocket";
import { FaCheck } from "react-icons/fa";

const fetchPayments = async (setMyPayments) => {
  try {
    const res = await axios.get(
      `https://liber-payments-api-bb6000485904.herokuapp.com/payments/${localStorage.getItem(
        "userId"
      )}`
    );
    setMyPayments(res.data);
  } catch (err) {
    toast.error("Erro ao encontrar meus pagamentos.", {
      closeOnClick: true,
    });
    console.log("Erro ao encontrar meus pagamentos.", err);
  }
};

export default function MyPayments() {
  const [myPayments, setMyPayments] = useState([]);
  const [timeoutWs, setTimeoutWs] = useState();

  useEffect(() => {
    fetchPayments(setMyPayments);
  }, []);

  const ws = useWebSocket("ws://liber-websocket-c7a65390f74d.herokuapp.com", {
    onOpen: () => {
      setTimeoutWs(
        setInterval(() => {
          ws.sendJsonMessage({});
        }),
        30000
      );
      ws.sendJsonMessage({
        type: "register",
        user_id: localStorage.getItem("userId"),
      });
    },
    onMessage: (e) => {
      const data = JSON.parse(e.data);
      if (data.event === "CHANGE_PAYMENT") fetchPayments(setMyPayments);
      console.log(e.data);
    },
    onClose: () => {
      clearInterval(timeoutWs);
    },
  });

  return (
    <>
      <Container>
        {myPayments.map((myPayment) => (
          <ContainerPayments key={myPayment.payment_id}>
            <Gap>
              <span>Data do Pedido</span>
              <h1>{myPayment.data_created}</h1>
            </Gap>
            <PayNow>
              <Gap>
                <span className="bold">Status</span>
                <SubTitle>{myPayment.status ? "Aprovado" : "A Pagar"}</SubTitle>
              </Gap>
              {myPayment.status ? (
                <ReactIcon>
                  <FaCheck color="green" size={24} />
                </ReactIcon>
              ) : (
                <Ahref href={myPayment.link_to_payment} target="_blank">
                  Pagar Agora
                </Ahref>
              )}
            </PayNow>
          </ContainerPayments>
        ))}
      </Container>
    </>
  );
}
