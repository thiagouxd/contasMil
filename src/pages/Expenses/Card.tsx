import styled from "styled-components";
import Button from "../../components/Button";
import Tag from "../../components/Tag";

const Card = (props: {
  title: String;
  stipulated: String;
  used: String;
  balance: String;
}) => {
  return (
    <Container>
      <Header>
        <Title>{props.title}</Title>
        <Tag text="Cagou nas Zorba" status="alert" />
      </Header>
      <Description>
        <p>
          Valor estipulado: <strong>R${props.stipulated}</strong>
        </p>
        <p>
          Saldo utilizado: <strong>R${props.used}</strong>
        </p>
        <p>
          Saldo para o dia: <strong>R${props.balance}</strong>
        </p>
      </Description>
      <Button type="button" icon="add">
        Oi
      </Button>
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

export default Card;
