import { useState } from "react";
import { getExpenseData, writeExpenseData } from "../../api";

const ExpenseForm = () => {
  const [data, setData] = useState({});

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        writeExpenseData({ ...data });
      }}
    >
      <div>
        <label htmlFor="name">Nome do Gasto</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="total-value">Valor total para gastar</label>
        <input
          type="number"
          name="total-value"
          id="total-value"
          onChange={(e) => setData({ ...data, totalValue: e.target.value })}
        />
      </div>
      <div>
        <button type="submit">Cadastrar novo gastoo</button>
      </div>
      <div>
        <button type="button" onClick={() => getExpenseData()}>
          Obter dados
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
