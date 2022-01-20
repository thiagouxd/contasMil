import { FormEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { writeDailyExpenseData } from "../../api";
import Button from "../../components/Button";
import Input from "../../components/Input";

type DataType = {
  date: string;
  value: string;
};

const DailyExpensesForm = () => {
  const [data, setData] = useState<DataType>({ date: "", value: "" });
  const search = useLocation().search;
  const idExpense = new URLSearchParams(search).get("idExpense");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    data.date && data.value && setDisabled(false);
  }, [data]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        writeDailyExpenseData(idExpense, {
          date: data.date,
          value: Number(data.value),
        }).then((res) => {
          setData({ date: "", value: "" });
        });
      }}
    >
      <div>
        <label>Data</label>
        <Input
          type="date"
          name="date"
          id="date"
          value={data.date}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setData({ ...data, date: e.currentTarget.value })
          }
        />
      </div>

      <div>
        <label>Valor</label>
        <Input
          step=".01"
          type="number"
          name="value"
          id="value"
          inputmode="decimal"
          value={data.value}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setData({ ...data, value: e.currentTarget.value })
          }
        />
      </div>

      <div>
        <Button disabled={disabled} type="submit">
          Criar um gasto diário
        </Button>
      </div>
    </form>
  );
};

export default DailyExpensesForm;
