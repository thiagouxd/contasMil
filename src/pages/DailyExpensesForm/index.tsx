import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDailyExpenseData, writeDailyExpenseData } from "../../api";

type DataType = {
  date: string;
  value: number;
};

const DailyExpensesForm = () => {
  const [data, setData] = useState<DataType>({ date: "", value: 0 });
  const search = useLocation().search;
  const idExpense = new URLSearchParams(search).get("idExpense");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    data.date && data.value && setDisabled(false);
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        writeDailyExpenseData(idExpense, { ...data });
      }}
    >
      <div>
        <label>Data</label>
        <input
          type="date"
          name="date"
          id="date"
          onChange={(e) => setData({ ...data, date: e.target.value })}
        />
      </div>

      <div>
        <label>Valor</label>
        <input
          type="text"
          name="value"
          id="value"
          onChange={(e) => setData({ ...data, value: Number(e.target.value) })}
        />
      </div>

      <div>
        <button disabled={disabled} type="submit">
          Criar um gasto diário
        </button>
      </div>
    </form>
  );
};

export default DailyExpensesForm;
