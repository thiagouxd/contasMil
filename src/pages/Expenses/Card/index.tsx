import { useNavigate } from "react-router";
import Tag from "../../../components/Tag";
import { StatusProps } from "../../../components/Tag/Tag.types";
import { addExpenses } from "../../../utils/addExpenses";
import { Container, Description, Header, Title } from "./Card.styled";
import { CardProps } from "./Card.types";

const Card = ({
  title,
  stipulated,
  balance,
  idExpense,
  dailyExpense,
}: CardProps) => {
  const navigate = useNavigate();

  const statusCard = () => {
    return stipulated < addExpenses(dailyExpense)
      ? { status: "success", text: "Continuar forte!" }
      : { status: "alert", text: "Fez merda, pae!" };
  };

  return (
    <Container
      tabIndex={0}
      onClick={() => navigate(`/expense-details?idExpense=${idExpense}`)}
    >
      <Header>
        <Title>{title}</Title>
        <Tag
          status={statusCard()?.status as StatusProps}
          text={statusCard()?.text}
        />
      </Header>
      <Description>
        <p>
          Valor estipulado: <strong>R${stipulated}</strong>
        </p>

        {dailyExpense && (
          <p>
            Saldo utilizado: <strong>R${addExpenses(dailyExpense)}</strong>
          </p>
        )}

        {/* <p>
          Saldo para o dia: <strong>R${balance}</strong>
        </p> */}
      </Description>
    </Container>
  );
};

export default Card;
