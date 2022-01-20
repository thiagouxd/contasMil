import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { writeExpenseData } from "../../api";
import Button from "../../components/Button";
import Input from "../../components/Input";

type DataType = {
  name: string;
  totalValue: string;
};

const ExpenseForm = () => {
  const [data, setData] = useState<DataType>({ name: "", totalValue: "" });
  const [disabledButton, setDisabledButton] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    data.name && data.totalValue && setDisabledButton(false);
  }, [data]);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        writeExpenseData({ ...data }).then((res) => {
          console.log("res:", res);
          navigate("/");
        });
      }}
    >
      <div>
        <label htmlFor="name">Nome do Gasto</label>
        <Input
          type="text"
          name="name"
          id="name"
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setData({ ...data, name: e.currentTarget.value })
          }
        />
      </div>
      <div>
        <label htmlFor="total-value">Valor total para gastar no mês</label>
        <Input
          type="number"
          name="total-value"
          id="total-value"
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setData({ ...data, totalValue: e.currentTarget.value })
          }
        />
      </div>
      <div>
        <Button disabled={disabledButton} type="submit">
          Cadastrar novo gastoo
        </Button>
      </div>
    </Form>
  );
};

export default ExpenseForm;

const Form = styled.form`
  padding: 16px 24px;
`;
