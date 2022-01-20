import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getDailyExpenseData, writeDailyExpenseData } from "../../api";

const DailyExpensesForm = () => {
  const [data, setData] = useState({});
  const search = useLocation().search;
  const idExpense = new URLSearchParams(search).get("idExpense");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        writeDailyExpenseData(idExpense, { ...data });
      }}
    >
      <input
        type="date"
        name="date"
        id="date"
        onChange={(e) => setData({ ...data, date: e.target.value })}
      />

      <input
        type="number"
        name="value"
        id="value"
        onChange={(e) => setData({ ...data, value: e.target.value })}
      />

      <button type="submit">Criar um gasto diário</button>
    </form>
  );
};

export default DailyExpensesForm;
