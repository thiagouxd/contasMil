import Header from "../../components/Header";
import Card from "./Card";

const Expenses = () => {
  return (
    <>
      <Header title="Despesas infinitas" />
      <Card title="Gasto" stipulated="42,90" used="42,90" balance="42,90" />
    </>
  );
};

export default Expenses;
