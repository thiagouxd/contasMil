import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getExpenseData } from "../../api";
import { addExpenses } from "../../utils/addExpenses";
import Chart from "../../components/Chart";
import { arrayOfDays } from "../../utils/daysInTheMonth";
import Button from "../../components/Button";
import styled from "styled-components";

const ExpenseDetails = () => {
  const search = useLocation().search;
  const idExpense = new URLSearchParams(search).get("idExpense");
  const [expense, setExpense] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      getExpenseData().then((res) => {
        const data = res.filter((item: any) => {
          return item?.id === Number(idExpense);
        });
        setExpense(data[0]);
      });
    }, 1);
  }, [idExpense]);

  return (
    <Container>
      {expense && (
        <>
          <p>{expense.name}</p>
          <p>{expense.totalValue}</p>
          <p>{addExpenses(expense.dailyExpense)}</p>
          <Button
            type="button"
            onClick={() =>
              navigate(`/daily-expenses-form?idExpense=${expense.id}`)
            }
          >
            Gasto do dia
          </Button>

          {expense.dailyExpense && (
            <div style={{ position: "relative" }}>
              <Chart
                data={arrayOfDays()}
                totalValue={expense.totalValue}
                dailyExpenses={expense.dailyExpense}
              />
            </div>
          )}

          <ul>
            {expense.dailyExpense &&
              expense.dailyExpense.map((item: any) => {
                return (
                  <li>
                    {item.value} {item.date}
                  </li>
                );
              })}
          </ul>
        </>
      )}
    </Container>
  );
};

export default ExpenseDetails;

const Container = styled.div`
  padding: 0 16px;
`;
