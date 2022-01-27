import "./App.css";
import Expenses from "./pages/Expenses";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ExpenseDetails from "./pages/ExpenseDetails";
import DailyExpensesForm from "./pages/DailyExpensesForm";
import ExpenseForm from "./pages/ExpenseForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Expenses />} />
        <Route path="/expense-details" element={<ExpenseDetails />} />
        <Route path="/daily-expenses-form" element={<DailyExpensesForm />} />
        <Route path="/expense-form" element={<ExpenseForm />} />
      </Routes>

      <ul>
        <li>
          <Link to="/">Expenses</Link>
        </li>
        <li>
          <Link to="/expense-details">ExpenseDetails</Link>
        </li>
        <li>
          <Link to="/daily-expenses-form">DailyExpensesForm</Link>
        </li>
        <li>
          <Link to="/expense-form">ExpenseForm</Link>
        </li>
      </ul>
    </Router>
  );
}

export default App;
