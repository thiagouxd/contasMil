import { useState } from "react";
import { getDailyExpenseData, writeDailyExpenseData } from "../../api";

const DailyExpensesForm = () => {
  const [data, setData] = useState({});

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        writeDailyExpenseData(1, { ...data });
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
      <button type="button" onClick={() => getDailyExpenseData(1)}>
        Obter um gasto diário
      </button>
    </form>
  );
};

export default DailyExpensesForm;
