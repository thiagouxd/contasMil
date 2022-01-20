import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getExpenseData } from "../../api";
import { addExpenses } from "../../utils/addExpenses";
import Chart from "../../components/Chart";
import { arrayOfDays } from "../../utils/daysInTheMonth";

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
        setExpense(data);
      });
    }, 1);
  }, []);

  return (
    <div>
      {expense?.map((item: any) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.totalValue}</p>
            <p>{addExpenses(item.dailyExpense)}</p>
            <button
              onClick={() =>
                navigate(`/daily-expenses-form?idExpense=${item.id}`)
              }
            >
              Gasto do dia
            </button>
            <Chart
              data={arrayOfDays()}
              totalValue={item.totalValue}
              dailyExpenses={item.dailyExpense}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseDetails;
