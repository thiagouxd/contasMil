import { useNavigate } from "react-router";
import styled from "styled-components";
import Tag from "../../components/Tag";
import { addExpenses } from "../../utils/addExpenses";

export default (props: {
  title: String;
  stipulated: number;
  balance: number;
  idExpense: number;
  dailyExpense: Array<object>;
}) => {
  const navigate = useNavigate();

  return (
    <Container
      tabIndex={0}
      onClick={() => navigate(`/expense-details?idExpense=${props.idExpense}`)}
    >
      <Header>
        <Title>{props.title}</Title>
        <Tag text="Cagou nas Zorba" />
      </Header>
      <Description>
        <p>
          Valor estipulado: <strong>R${props.stipulated}</strong>
        </p>

        {props.dailyExpense && (
          <p>
            Saldo utilizado:{" "}
            <strong>R${addExpenses(props.dailyExpense)}</strong>
          </p>
        )}

        {/* <p>
          Saldo para o dia: <strong>R${props.balance}</strong>
        </p> */}
      </Description>
    </Container>
  );
};

const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin: 0;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  background: #565656;
  border-radius: 0 8px 8px 0px;
  margin-right: 24px;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #333;
  }
`;

const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    margin: 0;
    margin-right: 16px;
    color: white;
    font-size: 14px;
  }
`;
