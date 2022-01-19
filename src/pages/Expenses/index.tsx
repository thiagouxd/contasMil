import Card from "./Card";
import { getExpenseData } from "../../api";
import { useEffect, useState } from "react";

type ExpenseName = {
  name: string;
  totalValue: number;
  id: number;
};

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getExpenseData().then((res) => setExpenses(res));
    }, 1);
  }, [setExpenses]);

  return (
    <>
      <h1>Gastos infinitos</h1>
      {expenses?.map((expense: ExpenseName) => {
        return (
          <Card
            key={expense.id}
            title={expense.name}
            stipulated={expense.totalValue}
            used={expense.totalValue}
            balance={expense.totalValue}
          />
        );
      })}
    </>
  );
};

export default Expenses;
