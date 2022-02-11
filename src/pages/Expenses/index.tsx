import { Icon } from "@material-ui/core";
import { Button } from "baseui/button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Card from "./Card";

const Expenses = () => {
  return (
    <>
      <Header title="Despesas infinitas" hasBackButton />
      <Card title="Gasto" stipulated="42,90" used="42,90" balance="42,90" />
      <Link to="/expense-form">
        <AddButton>
          <Icon>add</Icon>
        </AddButton>
      </Link>
    </>
  );
};

const AddButton = styled(Button)`
  position: fixed;
  bottom: 24px;
  right: 24px;
`;

export default Expenses;
