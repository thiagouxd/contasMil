import Card from "./Card";
import { getExpenseData } from "../../api";
import { useEffect, useState } from "react";

type ExpenseName = {
  name: string;
  totalValue: number;
  id: number;
  dailyExpense: any;
};

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getExpenseData().then((res) => {
        setExpenses(res);
      });
    }, 1);
  }, []);

  return (
    <>
      <h1>Gastos infinitos</h1>
      {expenses?.map((expense: ExpenseName) => {
        return (
          <Card
            key={expense.id}
            idExpense={expense.id}
            title={expense.name}
            stipulated={expense.totalValue}
            balance={expense.totalValue}
            dailyExpense={expense.dailyExpense}
          />
        );
      })}
    </>
  );
};

export default Expenses;
